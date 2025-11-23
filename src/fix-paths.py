import re

file_path = "App.tsx"

with open(file_path, "r", encoding="utf8") as f:
    content = f.read()

pattern = r'thumbnail:\s*"(.*?)"'

def fix_path(match):
    original = match.group(1)

    # Convert only the actual image path
    fixed = original.lower().replace(" ", "-")

    return f'thumbnail: "{fixed}"'

new_content = re.sub(pattern, fix_path, content)

with open(file_path, "w", encoding="utf8") as f:
    f.write(new_content)

print("✔ All thumbnail paths safely updated.")
