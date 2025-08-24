class DocumentExporter {
  export(content) {
    console.log(`📄 Exporting document with content: "${content}"`);
  }
}

class PDFExporter extends DocumentExporter {
  export(content) {
    console.log(`🖼️ Exporting to PDF format: "${content}"`);
  }
}

class DocxExporter extends DocumentExporter {
  export(content) {
    console.log(`📝 Exporting to DOCX format: "${content}"`);
  }
}

class TxtExporter extends DocumentExporter {
  export(content) {
    console.log(`📜 Exporting to TXT format: "${content}"`);
  }
}

function exportDocument(content, exporter) {
  exporter.export(content);
}

let documentContent = "Project report for Q3 2025.";

exportDocument(documentContent, new PDFExporter());
exportDocument(documentContent, new DocxExporter());
exportDocument(documentContent, new TxtExporter());
