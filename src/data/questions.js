// First questions everyone answers

export const commonQuestions = [
  {
    id: "name",
    type: "text",
    question: "What's your name?",
    placeholder: "Enter your name...",
  },

  {
    id: "date",
    type: "date",
    question: "When are you free?",
  },

  {
    id: "dateType",
    type: "choice",
    question: "What kind of date are you planning?",

    options: [
      {
        emoji: "🍕",
        title: "Food",
        description: "Restaurants & cafés",
      },

      {
        emoji: "☕",
        title: "Coffee",
        description: "Cozy conversations",
      },

      {
        emoji: "🎬",
        title: "Movies",
        description: "Cinema together",
      },

      {
        emoji: "🎮",
        title: "Games",
        description: "Fun activities",
      },
    ],
  },
];



/* ---------------- FOOD ---------------- */

export const foodQuestions = [

  {
    id: "foodType",
    type: "choice",
    question: "What are you craving?",

    options: [
      { emoji: "🍔", title: "Burger", description: "Juicy & delicious" },
      { emoji: "🍕", title: "Pizza", description: "Cheesy goodness" },
      { emoji: "🍜", title: "Chinese", description: "Noodles & more" },
      { emoji: "🍛", title: "Indian", description: "Rich flavors" },
      { emoji: "🍣", title: "Sushi", description: "Fresh & elegant" },
      { emoji: "🥗", title: "Healthy", description: "Fresh & light" },
      { emoji: "✍️", title: "Other", description: "Write your own" },
    ],
  },

  {
    id: "foodPlace",
    type: "choice",
    question: "Where would you like to go?",

    options: [
      { emoji: "🌃", title: "Rooftop", description: "Amazing skyline" },
      { emoji: "🌊", title: "Lakeside", description: "Peaceful views" },
      { emoji: "🌿", title: "Garden", description: "Nature vibes" },
      { emoji: "🏙️", title: "Fine Dining", description: "Elegant evening" },
      { emoji: "🛣️", title: "Street Food", description: "Local favourites" },
      { emoji: "🕯️", title: "Candle Light", description: "Romantic dinner" },
      { emoji: "✍️", title: "Other", description: "Custom place" },
    ],
  },

  {
    id: "time",
    type: "time",
    question: "Preferred time?",
  },

  {
    id: "message",
    type: "text",
    question: "Leave a sweet message ❤️",
    placeholder: "Write something...",
  },
];



/* ---------------- COFFEE ---------------- */

export const coffeeQuestions = [

  {
    id: "cafeType",
    type: "choice",
    question: "What kind of café?",

    options: [
      { emoji: "☕", title: "Cozy Café", description: "Warm atmosphere" },
      { emoji: "📚", title: "Book Café", description: "Books & coffee" },
      { emoji: "🎶", title: "Live Music", description: "Music lovers" },
      { emoji: "🌇", title: "Sunset Café", description: "Beautiful view" },
      { emoji: "🍰", title: "Dessert Café", description: "Sweet treats" },
      { emoji: "🧋", title: "Bubble Tea", description: "Something different" },
      { emoji: "✍️", title: "Other", description: "Custom café" },
    ],
  },

  {
    id: "vibe",
    type: "choice",
    question: "Preferred vibe?",

    options: [
      { emoji: "🤫", title: "Quiet", description: "Peaceful" },
      { emoji: "❤️", title: "Romantic", description: "Perfect date" },
      { emoji: "✨", title: "Modern", description: "Stylish" },
      { emoji: "🌿", title: "Nature", description: "Green surroundings" },
      { emoji: "💎", title: "Luxury", description: "Premium experience" },
      { emoji: "✍️", title: "Other", description: "Custom vibe" },
    ],
  },

  {
    id: "time",
    type: "time",
    question: "Preferred time?",
  },

  {
    id: "message",
    type: "text",
    question: "Leave a sweet message ❤️",
    placeholder: "Write something...",
  },
];



/* ---------------- MOVIES ---------------- */

export const movieQuestions = [

  {
    id: "genre",
    type: "choice",
    question: "Which genre?",

    options: [
      { emoji: "❤️", title: "Romance", description: "Love stories" },
      { emoji: "😂", title: "Comedy", description: "Laugh together" },
      { emoji: "👻", title: "Horror", description: "Scary fun" },
      { emoji: "🚀", title: "Sci-Fi", description: "Future worlds" },
      { emoji: "🎭", title: "Drama", description: "Emotional stories" },
      { emoji: "🦸", title: "Action", description: "Adventure" },
      { emoji: "✍️", title: "Other", description: "Custom genre" },
    ],
  },

  {
    id: "snack",
    type: "choice",
    question: "Favorite snack?",

    options: [
      { emoji: "🍿", title: "Popcorn", description: "" },
      { emoji: "🍕", title: "Pizza", description: "" },
      { emoji: "🥤", title: "Soft Drink", description: "" },
      { emoji: "🍫", title: "Chocolate", description: "" },
      { emoji: "✍️", title: "Other", description: "" },
    ],
  },

  {
    id: "time",
    type: "time",
    question: "Preferred show time?",
  },

  {
    id: "message",
    type: "text",
    question: "Leave a sweet message ❤️",
    placeholder: "Write something...",
  },
];



/* ---------------- GAMES ---------------- */

export const gameQuestions = [

  {
    id: "activity",
    type: "choice",
    question: "Which activity?",

    options: [
      { emoji: "🎳", title: "Bowling", description: "" },
      { emoji: "🏎️", title: "Go Karting", description: "" },
      { emoji: "🎮", title: "Arcade", description: "" },
      { emoji: "🎱", title: "Pool", description: "" },
      { emoji: "🧩", title: "Escape Room", description: "" },
      { emoji: "🥽", title: "VR Gaming", description: "" },
      { emoji: "✍️", title: "Other", description: "" },
    ],
  },

  {
    id: "place",
    type: "choice",
    question: "Indoor or Outdoor?",

    options: [
      { emoji: "🏠", title: "Indoor", description: "" },
      { emoji: "🌳", title: "Outdoor", description: "" },
      { emoji: "✍️", title: "Other", description: "" },
    ],
  },

  {
    id: "time",
    type: "time",
    question: "Preferred time?",
  },

  {
    id: "message",
    type: "text",
    question: "Leave a sweet message ❤️",
    placeholder: "Write something...",
  },
];

