const today = new Date ();

const year = today.getFullYear ();
const month = today.getMonth () +1;
const date = today.getDate ();

const formatted = `${year}年${month}月${date}日`;

console.log(formatted);
