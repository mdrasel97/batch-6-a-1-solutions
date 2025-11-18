# TypeScript Blog Answers

## 1. Differences between Interfaces and Types in TypeScript

Interface এবং Type উভয়ই TypeScript-এ ডেটা স্ট্রাকচার বর্ণনা করতে ব্যবহৃত হয়, তবে তাদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে।

### ✔ Interface

- মূলত object structure define করতে ব্যবহৃত হয়।
- `extends` ব্যবহার করে অন্য interface প্রসারিত করা যায়।
- একই interface একাধিকবার declare করলে অটোমেটিকভাবে merge হয়।

### ✔ Type Alias

- আরও flexible — object, union, primitives, function type— সবকিছু define করতে পারে।
- একবার declared হলে পুনরায় merge হয় না।
- union এবং complex type তৈরি করতে সুবিধা।

### উদাহরণ (Interface)

```ts
interface User {
  name: string;
  age: number;
}

const person: User = {
  name: "Cat",
  age: 23,
};
```

### উদাহরণ (Type)

```ts
type Status = "success" | "error";

type Product = {
  title: string;
  price: number;
};

const laptop: Product = {
  title: "MacBook",
  price: 1500,
};
```

Interface দিয়ে মূলত object এর structure define করা হয়, আর Type আরও broader — সব ধরনের ডেটা টাইপ represent করতে পারে।

---

## 2. What is the use of the `keyof` keyword in TypeScript?

`keyof` একটি type operator যা একটি object type এর সবগুলা key-এর union তৈরি করে।

### ✔ উদাহরণ

```ts
type User = {
  name: string;
  age: number;
  email: string;
};

type UserKeys = keyof User; // 'name' | 'age' | 'email'

const key: UserKeys = "name"; // ✔ valid
```

### Key Takeaway

`keyof` ব্যবহার করলে object key access আরও type-safe হয় এবং ভুল key ব্যবহারের সম্ভাবনা কমে।

---

## 3. Difference between `any`, `unknown`, and `never` in TypeScript

TypeScript-এ special types রয়েছে যাতে কোড আরও type-safe হয়।

### ✔ any

- যখন type জানা নেই তখন ব্যবহার করা হয়।
- TypeScript কোন error check করে না — risky।

```ts
let data: any = "hello";
data = 20; // allowed
```

### ✔ unknown

- any-এর মতো flexible কিন্তু safer।
- ব্যবহার করার আগে type check করা লাগে।

```ts
let value: unknown = "test";
if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

### ✔ never

- যেসব function কখনো return করে না (যেমন error throw করে বা infinite loop) তাদের জন্য।

```ts
function crash(): never {
  throw new Error("Something went wrong");
}
```

### Summary

- **any** → flexible but unsafe.
- **unknown** → safer version of any.
- **never** → functions that never return.
