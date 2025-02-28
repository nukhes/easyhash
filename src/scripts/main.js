import { hash } from "./hash.js"

const input = document.querySelector("#input")
const output = document.querySelector("#output")
const operation = document.querySelector("#operation")


// declare and setup hash operations
const hash_operations = [
	"md5", "sha1", "sha256"
]
hash_operations.forEach(value => {
	const option = new Option(value, value.toLowerCase())
	operation.appendChild(option)
})

// main logic
function refresh() {
	if (!input.value) {
		output.value = ""
		return
	}
	if (hash_operations.includes(operation.value)) {
		hash(input.value, operation.value, output)
	}
}

// ensure proper refresh when user change something
refresh()
document.addEventListener("keyup", refresh)
operation.addEventListener("change", refresh)