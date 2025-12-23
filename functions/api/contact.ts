export async function onRequestPost({ request, env }) {
    try {
        const body = await request.json();
        const { name, email, company, message, timestamp } = body;

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
                name,
                email,
                company,
                message,
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
