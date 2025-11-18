Blog Answers

1. What are some differences between interfaces and types in TypeScript?
   TypeScript-এ ইন্টারফেস এবং টাইপ উভয়ই ডেটা স্ট্রাকচার বর্ণনা করতে ব্যবহৃত হয়। তবে তাদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে। ইন্টারফেস সাধারণত অবজেক্ট এবং ক্লাসের জন্য ব্যবহৃত হয়, যেখানে type অবজেক্ট ছাড়াও প্রিমিটিভ বা অন্যান্য টাইপের জন্য ব্যবহার করা যেতে পারে।

ইন্টারফেস (Interface): ইন্টারফেস extends কীওয়ার্ড ব্যবহার করে অন্য একটি ইন্টারফেস কে এক্সটেন্ড বা প্রসারিত করতে পারে। boolean টাইপের ডাটার জন্য interface ব্যবহার করা যায় না, কারণ interface-এ সমান চিহ্ন (=) ব্যবহার করা যায় না।

পার্থক্যগুলো:
-- Interface সাধারণত object-এর কাঠামো define করতে ব্যবহৃত হয়।

Type আরও flexible — object, union, function type, primitives— সবকিছু define করতে পারে।

-- Interface extend করা যায়

interface A extends B {} -- Type সহজে union বা combination তৈরি করতে পারে: type Result = A | B

-- Interface দিয়া multiple বার declare করলে merge হয়। Type merge হয় না একবার define মানে শেষ।

Example
Interface Example:

interface User {
name: string;
age: number;
}

const person: User = {
name: "Cat",
age: 23,
};
Type Alias Example:

type Status = "success" | "error";

type Product = {
title: string;
price: number;
};

const laptop: Product = {
title: "MacBook",
price: 1500,
};
টাইপস্ক্রিপ্ট শিখতে গেলে Interface এবং Type দুটোই অপরিহার্য। Interface প্রধানত অবজেক্টের কাঠামো বা ডিজাইন বর্ণনা করে, আর Type বিভিন্ন ডেটা টাইপের নামকরণ করতে পারে। কখন কোনটি ব্যবহার করতে হবে, সেই ধারণা থাকলে কোড আরও পরিচ্ছন্ন এবং সহজে বোধগম্য হয়।

\*\*2. What is the use of the keyof keyword in TypeScript? Provide an example.
TypeScript-এ keyof কিওয়ার্ডের ব্যবহার

TypeScript আমাদের টাইপ সেফটি এবং কোডের স্থিতিশীলতা বাড়াতে অনেক শক্তিশালী টুল দেয়। এর মধ্যে একটি গুরুত্বপূর্ণ কিওয়ার্ড হলো keyof।

keyof কী?

keyof একটি type operator যা একটি অবজেক্ট টাইপকে ইনপুট হিসেবে নিয়ে সেই অবজেক্টের সকল কী (keys) এর string বা numeric literal union type তৈরি করে। সহজভাবে বলতে গেলে, এটি আমাদের বলে দেয়, “এই অবজেক্টে কোন কোন প্রপার্টি আছে।”

উদাহরণ:
type User = {
name: string;
age: number;
email: string;
};

// keyof User
type UserKeys = keyof User;

const key: UserKeys = "name"; // ✔️ valid

Key Takeaway

keyof ব্যবহার করলে object-এর key গুলো type-safe হয়, এবং ভুল key access করার সম্ভাবনা কমে।

3. Explain the difference between any, unknown, and never types in TypeScript.
   TypeScript আলাদা আলাদা special type রাখে কারণ কোডের আচরণ স্পষ্ট করে দেখানো লাগে। কোন ভ্যালু কেমন behave করবে, কোথায় error ধরবে, কোথায় strict হবে এগুলা বোঝানোর জন্যই এই special type গুলো আছে।

any
কখনো exact type জানা না থাকলে বা দ্রুত কিছু test করতে চাইলে any ব্যবহার হয়।
সবচেয়ে বড় সমস্যা হলো TypeScript তখন আর কিছু check করে না।
মানে তুমি যাই করো, ভুল হলেও error দিবে না। এতে কোড risky হয়ে যায়।
unknown
unknown দেখতে any-র মতো, কিন্তু safer।
কারণ ব্যবহার করার আগে type check করা লাগবই।
তাই ভুল ধরে ফেলে আগেই।
এটা সেই সব situation-এ ভালো লাগে যেখানে incoming data unpredictable।
never
never মানে এই function কোনোদিন কিছু return করে না।
যেমন error throw করে, infinite loop-এ যায়, বা এমন জায়গা যেখানে আসলে পৌঁছানোর কথা না এই unreachable state দেখাতে never ব্যবহার হয়।
Example
// any
let data: any = "hello";
data = 20;

// unknown
let value: unknown = "test";
if (typeof value === "string") {
console.log(value.toUpperCase());
}

// never
function crash(): never {
throw new Error("Something went wrong");
}
any flexible কিন্তু dangerous, unknown safe কারণ check লাগে, আর never সেই জায়গা দেখায় যেখানে function কখনোই শেষ হয় না বা return করে না। TypeScript-এ any, unknown, এবং never এই তিনটি বিশেষ টাইপ বিভিন্ন উদ্দেশ্যে ব্যবহৃত হয়। এগুলো ঠিকভাবে বুঝলে টাইপ সেফটি অনেক বাড়ে।
