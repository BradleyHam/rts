from PIL import Image

def create_favicon(source_image_path, output_path="favicon.ico"):
    # Sizes for the favicon - includes standard sizes for compatibility
    sizes = [(16, 16), (32, 32), (48, 48), (64, 64)]

    with Image.open(source_image_path) as image:
        # Convert image to RGBA if not already to ensure proper conversion
        if image.mode != 'RGBA':
            image = image.convert('RGBA')
        
        # Generate the favicon with multiple sizes for compatibility
        # Updated to use Image.Resampling.LANCZOS for high-quality downsampling
        favicon_images = [image.resize(size, Image.Resampling.LANCZOS) for size in sizes]
        favicon_images[0].save(output_path, format='ICO', sizes=[size for size in sizes])

# Replace 'source_image.png' with the path to your source PNG image
create_favicon('./logo.png')
