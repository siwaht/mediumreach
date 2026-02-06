function sanitize(str: string): string {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .trim();
}

function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

export async function onRequestPost({ request, env }) {
    try {
        const body = await request.json();
        const { name, email, company, message, timestamp } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return new Response(JSON.stringify({ message: "Name, email, and message are required" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        if (!isValidEmail(email)) {
            return new Response(JSON.stringify({ message: "Invalid email address" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        if (name.length > 100 || message.length > 5000 || (company && company.length > 100)) {
            return new Response(JSON.stringify({ message: "Input exceeds maximum length" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        const webhookUrl = env.WEBHOOK_URL;

        if (!webhookUrl) {
            return new Response(JSON.stringify({ message: "Webhook URL not configured" }), {
                status: 500,
                headers: { "Content-Type": "application/json" },
            });
        }

        const response = await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: sanitize(name),
                email: sanitize(email),
                company: company ? sanitize(company) : '',
                message: sanitize(message),
                timestamp: timestamp || new Date().toISOString(),
            }),
        });

        if (response.ok) {
            return new Response(JSON.stringify({ message: "Message sent successfully" }), {
                status: 200,
                headers: { "Content-Type": "application/json" },
            });
        } else {
            throw new Error("Failed to send message to webhook");
        }
    } catch (error) {
        console.error("Error sending message:", error);
        return new Response(JSON.stringify({ message: "Failed to send message" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
