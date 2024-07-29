#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod tauri_commands;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![tauri_commands::read_flac_metadata])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
