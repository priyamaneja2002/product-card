<img width="582" height="894" alt="image" src="https://github.com/user-attachments/assets/ebc6f95d-d702-437d-854e-5e13d1c85410" />


Interactive Glassmorphism Product Card
A high-performance, production-ready "Liquid Glass" product card built with Next.js, Tailwind CSS, and Framer Motion. This project demonstrates the bridge between high-end UI/UX design and optimized frontend engineering.

🚀 Live Demo
https://product-card-inky-five.vercel.app/product-card

🛠️ Tech Stack
Framework: Next.js 15 (App Router)

Styling: Tailwind CSS

Animations: Framer Motion (Spring Physics)

Icons: Lucide React

Background: Dynamic Mesh Gradient (CSS/Framer Motion)

🧠 Technical Deep-Dive
1. Mastering the Layout Engine
One of the primary challenges was ensuring the card expansion felt fluid rather than "stiff." I utilized Framer Motion's layout prop to handle shared element transitions. This allowed the card to resize based on its content dynamically without the performance hit of manual height calculations or CSS transitions that cause layout thrashing.

2. Solving Layout Jumping with popLayout
During the transition from the collapsed (dots) view to the expanded (details) view, standard animations often cause a momentary height jump. By implementing AnimatePresence mode="popLayout", I ensured that exiting elements are popped out of the document flow, allowing the new content to slide into place with zero jitter.

3. Smart Backdrop Refraction
Glassmorphism is only effective if there is something interesting to refract. I built a dynamic mesh gradient background using animated blobs. This provides the necessary color and movement for the backdrop-blur-3xl to create a realistic, "liquid" glass feel.

✨ Features
60FPS Performance: Leveraged hardware-accelerated transforms for all animations.

Liquid Glass Styling: Multi-layered shadows and deep blurs for a high-end aesthetic.

State Management: Interactive color and size selection with synchronized UI updates.

Strict Clipping: Implemented isolate and nested layout wrappers to ensure zero image overflow during complex scaling animations.

📦 Installation

Clone the repository:
Bash
git clone https://github.com/priyamaneja2002/product-card

Install dependencies:
Bash
npm install

Run the development server:
Bash
npm run dev


🤝 Contact & Opportunities
I am currently looking for roles as a Design Engineer, Frontend Developer, or UI/UX Developer. If you're looking for someone who obsesses over the intersection of design and code, let's talk!

LinkedIn: https://www.linkedin.com/in/priyamaneja/

Twitter/X: https://x.com/PriyamAneja
