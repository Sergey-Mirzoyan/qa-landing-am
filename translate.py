import json
import re

with open('translated.json', 'r', encoding='utf-8') as f:
    translations = json.load(f)

with open('src/components/GortsupComponents.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Sort by length descending to replace longer strings first (prevents partial replacements)
sorted_keys = sorted(translations.keys(), key=len, reverse=True)

# Replacements
for k in sorted_keys:
    if k == "ARM" or k.strip() == "": continue
    v = translations[k]
    
    # In JSX text: >Text<
    content = content.replace(">" + k + "<", ">" + v + "<")
    # With leading/trailing spaces
    content = content.replace("> " + k + " <", "> " + v + " <")
    # Inside quotes
    content = content.replace('"' + k + '"', '"' + v + '"')
    content = content.replace("'" + k + "'", "'" + v + "'")
    content = content.replace("`" + k + "`", "`" + v + "`")
    
    # Specific cases where the text might have a newline or something?
    # We can also do plain replacement if it doesn't match the boundaries but we have to be careful not to break HTML attributes.
    # Fortunately, Cyrillic text is almost exclusively in user-visible strings.
    # Let's do a simple replace for cyrillic and hope it's fine, since it's a React component file:
    # Actually it's safer to just do content = content.replace(k, v) but it might break if k is 'О нас' and it matches partly?
    # No, 'О нас' is mostly distinct.
    content = content.replace(k, v)

# Let's fix some specific letter collisions (padding, line-height issues)
content = content.replace("leading-[1.05]", "leading-tight")
content = content.replace("leading-none", "leading-tight")
content = content.replace("tracking-tighter", "tracking-normal")

# Replace broken logo image with SVG
logo_str = """<img
            alt="Gortsup Academy"
            className="h-10"
            src="https://lh3.googleusercontent.com/aida/ADBb0uhWGK-a5FYE4BxldVcsGO2WX4trYOGVn4cc7LrKHwnAKP8cQgTYB8_SCP6ZFDk-QPxm2O5Vod-Q3D639oHSxi-2Z8qdfhpAFPOK1Vz_SGJRpo35884RcuWf-3VS8HzHTfcwAp5rtIklrK9Hi0d1T7rIa85-AhwSO8ZZC61o6R8CPSRBbzl-D8HlgP0KYKgEJ-UWtKFVm0drjL0VKncPvUm926vYo4a42fcGdkFnfxmJelCbDgENm3l5T56N8G9_1DOByVCE0rLG5w"
            referrerPolicy="no-referrer"
          />"""

new_logo = """<div className="h-10 w-10 flex-shrink-0 bg-white rounded-xl shadow-sm flex items-center justify-center p-1.5 border border-outline-variant/10">
            <div className="w-full h-full bg-primary rounded-lg" style={{ borderBottomLeftRadius: '50%' }}></div>
          </div>"""

content = content.replace(logo_str, new_logo)

with open('src/components/GortsupComponents.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Translation applied.")
