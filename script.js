function rsvpEmail() {
    const subject = "RSVP for Tania’s 21st Birthday";
    const body = `Dear Chad & Tatianna,

I would love to RSVP for Tania's 21st Birthday! Here are my details:

👤 Full Name:
👥 Guest Count:
🥂 I will be bringing (drinks/appetizers):

🎉 Looking forward to celebrating this special day!

With best regards,
[Your Name Here]`;

    // Fully encode the body after formatting it as a normal string
    window.location.href = `mailto:em_tatianna@yahoo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
