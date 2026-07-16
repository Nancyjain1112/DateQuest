export default function downloadInvitation(answers) {
  const canvas = document.createElement("canvas");

  canvas.width = 1080;
  canvas.height = 1600;

  const ctx = canvas.getContext("2d");

  // ==========================================
  // Helper Functions
  // ==========================================

  function roundRect(x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + width, y, x + width, y + height, radius);
    ctx.arcTo(x + width, y + height, x, y + height, radius);
    ctx.arcTo(x, y + height, x, y, radius);
    ctx.arcTo(x, y, x + width, y, radius);
    ctx.closePath();
  }

  function centerText(text, y, font, color) {
    ctx.save();

    ctx.font = font;
    ctx.fillStyle = color;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.fillText(text, canvas.width / 2, y);

    ctx.restore();
  }

  function wrapText(text, x, y, maxWidth, lineHeight) {
    const words = text.split(" ");
    let line = "";

    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i] + " ";
      const width = ctx.measureText(testLine).width;

      if (width > maxWidth && i > 0) {
        ctx.fillText(line, x, y);
        line = words[i] + " ";
        y += lineHeight;
      } else {
        line = testLine;
      }
    }

    ctx.fillText(line, x, y);
  }

  // ==========================================
  // Invitation Data
  // ==========================================

  const activity =
    answers.foodType ||
    answers.cafeType ||
    answers.genre ||
    answers.activity ||
    "A Wonderful Date";

  const location =
    answers.foodPlace ||
    answers.vibe ||
    answers.place ||
    "";

  const emoji =
    answers.foodType
      ? "🍽️"
      : answers.cafeType
      ? "☕"
      : answers.genre
      ? "🎬"
      : "🎮";

  const formattedDate = answers.date
    ? new Date(answers.date).toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "";

  let formattedTime = "";

  if (answers.time) {
    const [hour, minute] = answers.time.split(":");

    const d = new Date();

    d.setHours(hour);
    d.setMinutes(minute);

    formattedTime = d.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });
  }

  // ==========================================
  // Background
  // ==========================================

  const gradient = ctx.createLinearGradient(
    0,
    0,
    0,
    canvas.height
  );

  gradient.addColorStop(0, "#FFE6F0");
  gradient.addColorStop(0.5, "#FFF8FB");
  gradient.addColorStop(1, "#FFD9EA");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // ==========================================
  // Main Card
  // ==========================================

  ctx.shadowColor = "rgba(0,0,0,0.12)";
  ctx.shadowBlur = 30;
  ctx.shadowOffsetY = 8;

  roundRect(70, 70, 940, 1460, 45);

  ctx.fillStyle = "#FFFFFF";
  ctx.fill();

  // Remove shadow for text

  ctx.shadowColor = "transparent";
  ctx.shadowBlur = 0;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;

  // ==========================================
  // Decorative Emojis
  // ==========================================

  ctx.font = "42px serif";
  ctx.textAlign = "left";

  ctx.fillText("🌸", 120, 120);
  ctx.fillText("💖", 905, 120);
  ctx.fillText("✨", 120, 1490);
  ctx.fillText("🌸", 905, 1490);

  // ==========================================
  // Header
  // ==========================================

  centerText(
    "DATEQUEST",
    145,
    "bold 26px Arial",
    "#EC4899"
  );

  centerText(
    "💌 You're Invited 💌",
    220,
    "bold 60px Arial",
    "#374151"
  );

  centerText(
    "Every beautiful memory begins with one simple invitation.",
    275,
    "28px Arial",
    "#6B7280"
  );
    // ==========================================
  // Greeting
  // ==========================================

  ctx.textAlign = "left";

  ctx.fillStyle = "#111827";
  ctx.font = "bold 38px Arial";
  ctx.fillText(`Dear ${answers.name || "Friend"},`, 140, 360);

  ctx.font = "30px Arial";
  ctx.fillStyle = "#4B5563";
  ctx.fillText("I'd love to invite you for", 140, 430);

  ctx.font = "bold 44px Arial";
  ctx.fillStyle = "#EC4899";
  ctx.fillText(activity, 140, 490);

  if (location) {
    ctx.font = "30px Arial";
    ctx.fillStyle = "#6B7280";
    ctx.fillText(`at ${location}`, 140, 540);
  }

  ctx.fillStyle = "#4B5563";
  ctx.font = "28px Arial";

  ctx.fillText(
    "Life is made of beautiful moments,",
    140,
    620
  );

  ctx.fillText(
    "and I'd love to spend one with you.",
    140,
    665
  );

  ctx.fillText(
    "Let's laugh, talk and create",
    140,
    710
  );

  ctx.fillText(
    "wonderful memories together.",
    140,
    755
  );

  // ==========================================
  // Details Card
  // ==========================================

  roundRect(140, 820, 800, 330, 35);

  ctx.fillStyle = "#FDF2F8";
  ctx.fill();

  ctx.strokeStyle = "#FBCFE8";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.textAlign = "center";

  ctx.font = "68px serif";
  ctx.fillStyle = "#111827";
  ctx.fillText(emoji, 540, 905);

  ctx.font = "bold 46px Arial";
  ctx.fillStyle = "#EC4899";
  ctx.fillText(activity, 540, 980);

  if (location) {
    ctx.font = "30px Arial";
    ctx.fillStyle = "#6B7280";
    ctx.fillText(`📍 ${location}`, 540, 1035);
  }

  ctx.font = "30px Arial";
  ctx.fillStyle = "#374151";

  ctx.fillText(
    `📅 ${formattedDate}`,
    540,
    1095
  );

  ctx.fillText(
    `🕒 ${formattedTime}`,
    540,
    1145
  );
    // ==========================================
  // Message Card
  // ==========================================

  roundRect(140, 1210, 800, 190, 30);

  ctx.fillStyle = "#FFF4F8";
  ctx.fill();

  ctx.strokeStyle = "#F9A8D4";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.textAlign = "center";

  ctx.fillStyle = "#EC4899";
  ctx.font = "bold 30px Arial";
  ctx.fillText("A little note for you 💖", 540, 1260);

  ctx.fillStyle = "#4B5563";
  ctx.font = "italic 30px Georgia";

  wrapText(
    `"${answers.message || ""}"`,
    540,
    1325,
    650,
    40
  );

  // ==========================================
  // Footer
  // ==========================================

  ctx.textAlign = "center";

  ctx.fillStyle = "#374151";
  ctx.font = "bold 42px Arial";
  ctx.fillText(
    "❤️ Hope to see you ❤️",
    540,
    1490
  );

  ctx.fillStyle = "#9CA3AF";
  ctx.font = "24px Arial";
  ctx.fillText(
    "Created with DateQuest",
    540,
    1535
  );
    // ==========================================
  // Download Image
  // ==========================================

  const link = document.createElement("a");
  link.download = "DateInvitation.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}