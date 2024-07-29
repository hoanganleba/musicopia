use lofty::file::AudioFile;
use lofty::probe::Probe;
use lofty::prelude::{TaggedFileExt, ItemKey};
use serde::Serialize;
use base64::{Engine as _, engine::general_purpose};

#[derive(Serialize)]
pub struct Metadata {
    title: Option<String>,
    artist: Option<String>,
    album: Option<String>,
    image: Option<String>,
    bit_depth: Option<u8>,
    sample_rate: Option<u32>,
}

#[tauri::command]
pub async fn read_flac_metadata(file_path: String) -> Result<Metadata, String> {
    let tagged_file = Probe::open(&file_path)
    .map_err(|e| e.to_string())?
    .read()
    .map_err(|e| e.to_string())?;

    let tag = tagged_file.primary_tag().ok_or("No primary tag found")?;
    let title = tag.get_string(&ItemKey::TrackTitle).map(|s| s.to_string());
    let artist = tag.get_string(&ItemKey::AlbumArtist).map(|s| s.to_string());
    let album = tag.get_string(&ItemKey::AlbumTitle).map(|s| s.to_string());

    let properties = tagged_file.properties();
    let bit_depth = properties.bit_depth();
    let sample_rate = properties.sample_rate();

    let image_base64 = if let Some(picture) = tag.pictures().first() {
        Some(general_purpose::STANDARD.encode(&picture.data()))
    } else {
        None
    };

    Ok(Metadata {
        title,
        artist,
        album,
        image: image_base64,
        bit_depth,
        sample_rate,
    })
}