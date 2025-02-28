#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use md5;
use sha1::{Digest, Sha1};
use sha2::Sha256;
use tauri::command;

#[command]
fn hash_string(input: String, alg: String) -> String {
    match alg.as_str() {
        "md5" => {
            format!("{:x}", md5::compute(input))
        }
        "sha1" => {
            let mut hasher = Sha1::new();
            hasher.update(input);
            format!("{:x}", hasher.finalize())
        }
        "sha256" => {
            let mut hasher = Sha256::new();
            hasher.update(input);
            format!("{:x}", hasher.finalize())
        }
        _ => { "Unsupported algorithm".to_string() }
    }
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![hash_string])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
