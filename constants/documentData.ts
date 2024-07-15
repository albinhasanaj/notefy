// Document data type
export const documentData = [
    {
        h: 270,
        w: 200,
        label: "Document 1",
        image: "/images/Document-Placeholder.png",
    }
]

// Amount of documents to be displayed
const sum = 13;

// Generate document data
for (let i = 1; i < sum; i++) {
    documentData.push({
        h: 270,
        w: 200,
        label: `Document ${i + 1}`,
        image: "/images/Document-Placeholder.png",
    })
}