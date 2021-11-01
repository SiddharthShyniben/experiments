const contents = Deno.readTextFileSync('css-api/template.css');

const date = new Date();
const year = date.getFullYear();
const month = date.toLocaleString('default', {month: 'long'}).toLowerCase();
const day = date.toLocaleString('default', {weekday: 'long'}).toLowerCase();
const dayCount = date.toLocaleString('default', {day: 'numeric'}).toLowerCase();
const leap = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0) ? '--leap: ;' : '';

const out = contents.replace('%{year}', year.toString())
	.replace('%{month}', month)
	.replace('%{day}', day)
	.replace('%{day-count}', dayCount)
	.replace('%{leap}', leap);

Deno.writeTextFileSync('css-api/gen.css', out);
