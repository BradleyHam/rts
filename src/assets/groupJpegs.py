import os
import shutil

def create_product_directories(base_dir):
    for item in os.listdir(base_dir):
        full_path = os.path.join(base_dir, item)
        if os.path.isfile(full_path) and item.endswith('.jpg'):
            # Extract product name; assuming format '[type]-[productName]_page_[number].jpg'
            # Adjust the splitting logic as per your filename format
            product_name_parts = item.split('_')[0]  # This would be 'mdmsSheet-colorEnhancer' for your example
            product_name = '-'.join(product_name_parts.split('-')[1:])  # This should give 'colorEnhancer'

            # Define target directory for this product
            target_dir = os.path.join(base_dir, product_name)
            if not os.path.exists(target_dir):
                os.makedirs(target_dir)
            
            # Move file to the target directory
            shutil.move(full_path, os.path.join(target_dir, item))
            print(f"Moved {item} to {target_dir}")

# Process both 'dataSheets' and 'mdmsSheets' directories
directories = ['./jpegs/dataSheets', './jpegs/mdmsSheets']
for directory in directories:
    create_product_directories(directory)

