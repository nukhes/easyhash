const { invoke } = window.__TAURI__.tauri;

export async function hash(input, alg, output) {
	output.value = await invoke("hash_string", {input: input, alg: alg})
}
