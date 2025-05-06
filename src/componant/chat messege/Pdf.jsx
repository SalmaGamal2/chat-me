// import React, { useState } from "react";
// import { Document, Page } from "react-pdf";
// import { Modal, Button } from "react-bootstrap"; // إذا كنت تستخدم Bootstrap

// // مكون الـ Modal لعرض الـ PDF
// const PDFModal = ({ pdfUrl, closeModal }) => {
//   return (
//     <Modal show={true} onHide={closeModal} centered>
//       <Modal.Header closeButton>
//         <Modal.Title>عرض PDF</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Document file={pdfUrl}>
//           <Page pageNumber={1} />
//         </Document>
//       </Modal.Body>
//     </Modal>
//   );
// };

// // المكون الرئيسي
// const App = () => {
//   const [pdfUrl, setPdfUrl] = useState(null);

//   // فتح الـ Modal مع رابط الـ PDF
//   const openModal = (url) => {
//     setPdfUrl(url);
//   };

//   // غلق الـ Modal
//   const closeModal = () => {
//     setPdfUrl(null);
//   };

//   return (
//     <div>
//       {/* زر لفتح الـ Modal وعرض الـ PDF */}
//       <Button onClick={() => openModal("https://example.com/your-pdf.pdf")}>
//         عرض PDF
//       </Button>

//       {/* عرض الـ Modal إذا كان يوجد URL للـ PDF */}
//       {pdfUrl && <PDFModal pdfUrl={pdfUrl} closeModal={closeModal} />}
//     </div>
//   );
// };

// export default Pdf;
import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { Modal, Button } from "react-bootstrap";

// مكون الـ Modal لعرض الـ PDF
const PDFModal = ({ pdfUrl, closeModal }) => {
  const [pageNumber, setPageNumber] = useState(1);

  const goToNextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const goToPrevPage = () => {
    setPageNumber(pageNumber - 1);
  };

  return (
    <Modal show={true} onHide={closeModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>عرض PDF</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="pdf-container">
          <Document file={pdfUrl}>
            <Page pageNumber={pageNumber} className="pdf-page" />
          </Document>
        </div>
        <div>
          <Button onClick={goToPrevPage} disabled={pageNumber <= 1}>
            السابق
          </Button>
          <Button onClick={goToNextPage}>التالي</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

// المكون الرئيسي
const Pdf = () => {
  const [pdfUrl, setPdfUrl] = useState(null);

  const openModal = (url) => {
    setPdfUrl(url);
  };

  const closeModal = () => {
    setPdfUrl(null);
  };

  return (
    <div>
      <Button onClick={() => openModal("https://example.com/your-pdf.pdf")}>
        عرض PDF
      </Button>

      {pdfUrl && <PDFModal pdfUrl={pdfUrl} closeModal={closeModal} />}
    </div>
  );
};

export default Pdf;
