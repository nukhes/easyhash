const { invoke } = window.__TAURI__.tauri;

export async function encrypt(input, alg, output) {
	output.value = await invoke("encrypt_string", {input: input, alg: alg})
}
