### Detailed Information of the Project

**October 2021**
**Project by Ursula Vallejo Janne** for the course Programming 1 / Campus Möndal - Gothemburg, Sweden.
**Technologies:** HTML, CSS, JavaScript

---

## General View

![Demo Screenshot](img/demo.png)

---

## Table of Contents

1. [General Project Plan](#1-general-project-plan)
2. [Documentation](#2-documentation)

   - [Step 1: HTML](#step-1-html)
   - [Step 2: CSS](#step-2-css)
   - [Step 3: JavaScript](#step-3-javascript)
   - [Step 4: Conclusion](#step-4-conclusion)
   - [Step 5: Other Resources](#step-5-other-resources)

3. [Assignment Info](#3-assignment-info)

---

## 1. General Project Plan

On Trello I created a board based on my analysis of the music-store website and the course requirements. Each column (step) on the board contains:

- A description of the requirements for that phase
- Detailed tasks and acceptance criteria

**View the Trello board here:**
[Trello Project Board](https://trello.com/invite/b/Z3Nuvnwx/986973450a0dfb68d65c026a87d672d2/programmering-1)

Using Trello helped me visualize progress, track what works, and ensure nothing was forgotten—resulting in a smoother workflow.

---

## 2. Documentation

The goal was to build a music CD shop with a dynamic shopping cart. In the cart you can:

- Increase/decrease item quantities
- View a subtotal per item and a total cart value
- See the total number of CDs added
- Check if you qualify for free shipping (over 259 kr) or see how much more is needed

### Initial Analysis

I started by studying two wireframes:

![Cart Wireframe](img/projekt%20Kundkorg.jpg)
![Function Map](img/functionsplan.jpg)

From these diagrams, I identified the key elements to implement:

1. A movable “Checkout” button that toggles the dropdown
2. Dynamically generate HTML for the cart contents
3. Two “open cart” controls (an icon and a button)
4. Inside the cart:

   - A “Close” button
   - A “Checkout” button that shows an alert

5. Each cart item must include:

   - Image, artist name, album title
   - A quantity `<input>`
   - A line total (quantity × price)
   - A “Remove” button
   - When quantity reaches 0, the item is removed

6. After the items: display total CDs and total price
7. Below the summary: free-shipping logic with two states:

   - **A.** “Free shipping over 259 kr (you need XX kr more)”
   - **B.** “You have free shipping!”

### Development Roadmap

1. **Set up Trello** with project steps
2. **Create project folder** with `img/`, `README.md`, `index.html`, `style.css`, `script.js`
3. **Write semantic HTML** for the overall layout
4. **Style with CSS** (Flexbox/Grid)
5. **Implement JavaScript** functions per the analysis diagram
6. **Test** to ensure no console errors and correct behavior
7. **Finalize CSS layout tweaks**
8. **Document** the process in the README

Below are the detailed steps for each technology.

---

### Step 1: HTML

1. **Gather assets:** 8 product images + logo → used `<img>`

   - _Challenge:_ Logo PNG lacked transparency → edited in Photoshop

2. **Header:** logo, search field, “Buy” button, cart icon
3. **Navbar:** placeholder `<nav><ul>` (no functionality yet)
4. **Main content:** `<main> / <section> / <h1> / <p>` text
5. **Product template:** `<article>` inside `<section>`

---

### Step 2: CSS

1. **Cart icon choice:** Tried Ionicons (would require installing libraries), so stuck with the transparent PNG

   - Ionicons: [https://ionic.io/ionicons](https://ionic.io/ionicons)
   - Google Fonts: [https://fonts.google.com/](https://fonts.google.com/)

2. **Page layout:** Center content in a frame (inspired by Jon Duckett’s _HTML & CSS_, p. 35)
3. **Product grid:** Flexbox for the gallery, CSS Grid for header
4. **Number input arrows:** Native spinners aren’t style-able cross-browser, so hid them with CSS and used custom buttons:

   ```css
   input[type='number'] {
     -webkit-appearance: textfield;
     -moz-appearance: textfield;
     appearance: textfield;
   }
   input[type='number']::-webkit-inner-spin-button,
   input[type='number']::-webkit-outer-spin-button {
     -webkit-appearance: none;
   }
   ```

   Reference: [https://stackoverflow.com/q/45396280](https://stackoverflow.com/q/45396280)

---

### Step 3: JavaScript

**Core functions implemented:**

1. **Data model:** An array of objects, e.g.

   ```js
   {
     artist: "Brandt Brauer Frick",
     album:  "Echo",
     tag:    "cd1",
     price:  190,
     img:    "brandtBF.jpg",
   }
   ```

2. **Cart dropdown toggle** (open/close)
3. **Render product list** dynamically:

   ```js
   function render() {
     const html = products
       .map((p) => template(p.id, p.artist, p.album, p.price, p.img))
       .join('\n')
     listProducts.innerHTML = html
   }
   ```

4. **Add to cart** with event listeners on “Buy” buttons
5. **Update quantity** & recalculate totals (if quantity = 0, remove item)
6. **Remove item** button
7. **Calculate total CDs** and **total price**
8. **Free shipping logic** (>= 259 kr)
9. **Checkout alert**

**Challenges & Solutions:**

- **Rendering the cart:** Initial attempts with querySelectorAll were confusing; switched to IDs per class instruction
- **Parsing numeric inputs:** Got `NaN` → learned about `parseInt` and value types
- **Summing inputs:** Found a StackOverflow snippet but chose to operate on the data array rather than DOM values
  References:

  - Array→string: [https://www.w3schools.com/jsref/jsref_join.asp](https://www.w3schools.com/jsref/jsref_join.asp)
  - Summing inputs: [https://stackoverflow.com/q/13540751](https://stackoverflow.com/q/13540751)

---

### Step 4: Conclusion

Integrating all functions was the toughest part. Breaking the project into small pieces, using `console.log` to inspect data flow, and iterating helped me understand JavaScript’s behavior. Building the cart from scratch was highly satisfying—and showed me how much more I can learn.

---

### Step 5: Other Resources

To research solutions I watched several tutorials on YouTube:

- _Model Your Web Shop with HTML, CSS & JavaScript_
  [https://www.youtube.com/watch?v=yASvgVh8p5A](https://www.youtube.com/watch?v=yASvgVh8p5A)
- _JavaScript Shopping Cart Tutorial – Part 1/5_
  [https://www.youtube.com/watch?v=B20Getj_Zk4](https://www.youtube.com/watch?v=B20Getj_Zk4)
  [https://www.youtube.com/watch?v=tEAl7L62GEw](https://www.youtube.com/watch?v=tEAl7L62GEw)
- _Free JS Shopping Cart Project Download_
  [https://www.youtube.com/watch?v=dSbWJAXQ7cA\&t=606s](https://www.youtube.com/watch?v=dSbWJAXQ7cA&t=606s)

Not all techniques applied (some used JSON or frameworks), but they helped clarify function interactions.

---

## 3. Assignment Info

### Research Question

How can we build a shopping cart that updates in real time?

### Goal

Create a simple site where users can add albums to a cart, update quantities, and unlock free shipping at a certain total.

### Constraints

- **HTML & CSS** for UI
- **Vanilla JavaScript** for logic
- **No:** jQuery, JavaScript frameworks, mandatory media queries

### Purpose

Learn what JavaScript brings to web functionality and its possibilities for application development.

### Deliverables

A working cart where users can:

- View available albums
- Add albums to the cart
- Remove albums
- Update album quantities in the cart

---

**Product View**
![Product List](img/1.png)

**Free Shipping Logic**

- If total ≥ 259 kr → “You have free shipping!”
- Else → “You need XX kr more for free shipping”
  ![Free Shipping Example](img/2.png)
