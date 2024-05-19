export interface DocumentVisitor {
    visitPDFDoc(pdf: PDFDoc): void;

    visitWordDoc(docx: WordDoc): void;
}

export interface AcceptsVisitor {
    accept(visitor: DocumentVisitor): void;
}

export class PDFDoc implements AcceptsVisitor {
    accept(visitor: DocumentVisitor): void {
        visitor.visitPDFDoc(this);
    }

    public view() {
        console.log(`Viewing the PDF`);
    }
}

export class WordDoc implements AcceptsVisitor {
    accept(visitor: DocumentVisitor): void {
        visitor.visitWordDoc(this);
    }

    public view() {
        console.log(`Viewing the Word`);
    }

    public edit() {
        console.log(`Editing the Word`);
    }
}

export class DocumentVisitorImpl implements DocumentVisitor {
    visitPDFDoc(pdf: PDFDoc): void {
        pdf.view();
    }
    visitWordDoc(docx: WordDoc): void {
        docx.edit()
    }

}

export class CompositeDocument implements AcceptsVisitor {
    private documents: AcceptsVisitor[] = [];

    public addDocument(d: AcceptsVisitor): void {
        this.documents.push(d);
    }

    public accept(visitor: DocumentVisitor): void {
        for (let document of this.documents) {
            document.accept(visitor);
        }
    }

}

const composite = new CompositeDocument();
const visitor = new DocumentVisitorImpl();
composite.addDocument(new PDFDoc());
composite.addDocument(new WordDoc());
composite.accept(visitor);