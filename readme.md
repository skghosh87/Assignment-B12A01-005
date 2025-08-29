1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

**getElementById**: getElementById is a method of JavaScript (DOM) which called Document Object Model. getElementById is unique in HTML.It select specifically one element by ID.
**getElementsByClassName:** getElementsByClassName is universal element in HTML. Select the
specific element or multiple element by its.

**querySelector / querySelectorAll:** querySelector or querySelectorAll are a selector which is used select multiple element in this method.

---

2. How do you **create and insert a new element into the DOM**?
   const div = document.createElement('div');

   document.body.appendChild(div);

---

3. What is **Event Bubbling** and how does it work?
   The Event Bubbling is DOM method in JavaScript. it used for different type of event mange such as click event, mouse hover, dblclick etc.
4. What is **Event Delegation** in JavaScript? Why is it useful?
   ইভেন্ট ডেলিগেশন হলো জাভাস্ক্রিপ্টের এমন একটি মেথড যেখানে চাইল্ড এলিমেন্ট গুলোর উপর আলাদাভাবে Handler ব্যবহার না করে তাদের Parent এলিমেন্টের উপর একটি Event Handler ব্যবহার করে সবগুলো এলিমেন্টকে এক্সেস করা যায়।
5. What is the difference between **preventDefault() and stopPropagation()** methods?
   preventDefault() এমন একটি মেথড যা কোন ইভেন্টের Default Behavior বন্ধ করে দেয়।
   stopPropagation() একটি ইভেন্ট বাবলিংয়ের উপর থেকে নিচের দিকে ছড়িয়ে পড়া আটকায়।
