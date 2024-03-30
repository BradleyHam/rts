import os
from pdf2image import convert_from_path

def ensure_dir(directory):
    if not os.path.exists(directory):
        os.makedirs(directory)

def convert_pdf_to_jpeg(src_dir, dest_dir_base):
    # List all PDF files in the source directory
    for pdf_filename in os.listdir(src_dir):
        if pdf_filename.endswith('.pdf'):
            # Prepare source PDF path
            pdf_path = os.path.join(src_dir, pdf_filename)
            # Determine the destination directory for the current PDF
            product_name = os.path.splitext(pdf_filename)[0]
            dest_dir = os.path.join(dest_dir_base, product_name)
            ensure_dir(dest_dir)

            # Convert PDF to a list of images
            images = convert_from_path(pdf_path)
            
            # Save each page as a JPEG image
            for i, image in enumerate(images):
                image_path = os.path.join(dest_dir, f'page_{i + 1}.jpg')
                image.save(image_path, 'JPEG')
                print(f'Saved {image_path}')

# Directories configuration
directories = {
    './pdfs/dataSheets': './jpegs/dataSheets',
    './pdfs/mdmsSheets': './jpegs/mdmsSheets'
}

for src, dest in directories.items():
    ensure_dir(dest)  # Ensure base destination directories exist
    convert_pdf_to_jpeg(src, dest)
