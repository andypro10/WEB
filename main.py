import json

def format_lyrics_as_json(lyrics):
    # Crear el objeto JSON con la letra de la canción
    return {
        "lyrics": lyrics
    }

def main():
    # Solicitar al usuario que ingrese la letra de la canción
    print("Ingresa la letra de la canción (presiona Enter dos veces para finalizar):")
    
    lyrics = ""
    while True:
        line = input()
        if line == "":
            break
        lyrics += line + "\n"
    
    # Convertir la letra a formato JSON
    lyrics_json = format_lyrics_as_json(lyrics)
    
    # Imprimir el JSON resultante
    print("\nAquí está el JSON generado:")
    print(json.dumps(lyrics_json, ensure_ascii=False, indent=4))

if __name__ == "__main__":
    main()
