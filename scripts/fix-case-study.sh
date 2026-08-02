#!/bin/bash

echo "========================================="
echo " Correction Case Study"
echo "========================================="

FILE="src/sections/CaseStudy/CaseStudy.jsx"

if [ ! -f "$FILE" ]; then
    echo "Fichier introuvable : $FILE"
    exit 1
fi

echo "✔ Sauvegarde..."

cp "$FILE" "${FILE}.bak"

echo "✔ Suppression de SectionTitle..."

python3 <<'PYTHON'
from pathlib import Path

file = Path("src/sections/CaseStudy/CaseStudy.jsx")

text = file.read_text()

# retire l'import
text = text.replace(
'import SectionTitle from "../../components/common/SectionTitle"\n',
''
)

# retire le bloc SectionTitle
start = text.find("<SectionTitle")

if start != -1:
    end = text.find("/>", start)

    if end != -1:
        text = text[:start] + text[end+2:]

file.write_text(text)

PYTHON

echo "✔ Terminé."

echo
echo "Une sauvegarde a été créée :"
echo
echo "src/sections/CaseStudy/CaseStudy.jsx.bak"