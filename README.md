# 🔍 Real-Time Search Filter (Vanilla JavaScript)

A real-time search filter built using **vanilla JavaScript**, HTML, and CSS.
The application dynamically filters and displays user cards as the user types, without page reloads.

---

## 📸 Preview

> Real-time filtering of user cards based on name input
> (Case-insensitive and instant updates)

---

## ✨ Features

* ⚡ Real-time search while typing
* 🔤 Case-insensitive matching
* 🧩 Dynamic DOM rendering
* 🧼 Clean separation of data logic and UI logic
* 🚫 Graceful handling of “No user found” cases
* 📱 Responsive card layout

---

## 🛠️ Tech Stack

* **HTML5**
* **CSS3**
* **JavaScript (ES6+)**
* **DOM API**

---

## 📂 Project Structure

```
.
├── RealTimeSearchFilter.html
├── RealTimeSearchFilter.css
├── RealTimeSearchFilter.js
└── README.md
```

---

## 📊 Data Model

User data is stored as an array of objects:

```js
const users = [
  {
    name: "Hari Sapkota",
    hobby: "coding with coffee",
    pic: "image-url"
  }
];
```

Each object represents a single user card.

---

## ⚙️ How It Works

### 1. Initial Rendering

* All users are rendered on page load
* DOM elements are created dynamically using JavaScript

### 2. Input Handling

* An `input` event listener detects every keystroke
* Search updates happen instantly

### 3. Filtering Logic

* The `Array.filter()` method is used to create a new array of matched users
* Both the input value and user names are normalized to lowercase to ensure case-insensitive search

### 4. UI Update

* Existing cards are cleared before rendering new results
* If no users match the input, a fallback message is displayed

---

## 🧠 Key JavaScript Concepts Used

* `Array.filter()` — data filtering
* `Array.forEach()` — rendering lists
* `startsWith()` — prefix-based search
* `toLowerCase()` — case normalization
* `document.createElement()` — dynamic DOM creation
* `addEventListener()` — event handling
* `appendChild()` — DOM insertion

---

## 📈 Search Behavior

| Input       | Result                                     |
| ----------- | ------------------------------------------ |
| `ha`        | Displays users whose names start with “ha” |
| `HARI`      | Matches “Hari Sapkota”                     |
| `xyz`       | Shows “No user found”                      |
| Empty input | Displays all users                         |
