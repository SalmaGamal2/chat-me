// import React, { useState } from "react";
// import { Document, Page } from "react-pdf";
// import { Modal, Button } from "react-bootstrap";
// import { pdfjs } from "react-pdf";
// pdfjs.GlobalWorkerOptions.workerSrc =
//   "https://unpkg.com/pdfjs-dist@2.9.359/es5/build/pdf.worker.min.js";

// const PDFModal = ({ pdfUrl, closeModal }) => {
//   const [pageNumber, setPageNumber] = useState(1);

//   const goToNextPage = () => {
//     setPageNumber(pageNumber + 1);
//   };

//   const goToPrevPage = () => {
//     setPageNumber(pageNumber - 1);
//   };

//   return (
//     <Modal show={true} onHide={closeModal} centered>
//       <Modal.Header closeButton>
//         <Modal.Title>عرض PDF</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <div className="pdf-container">
//           <Document file={pdfUrl}>
//             <Page pageNumber={pageNumber} className="pdf-page" />
//           </Document>
//         </div>
//         <div>
//           <Button onClick={goToPrevPage} disabled={pageNumber <= 1}>
//             السابق
//           </Button>
//           <Button onClick={goToNextPage}>التالي</Button>
//         </div>
//       </Modal.Body>
//     </Modal>
//   );
// };

// // المكون الرئيسي
// const pdf = () => {
//   const [pdfUrl, setPdfUrl] = useState(null);

//   const openModal = (url) => {
//     setPdfUrl(url);
//   };

//   const closeModal = () => {
//     setPdfUrl(null);
//   };

//   return (
//     <div>
//       <Button onClick={() => openModal("https://example.com/your-pdf.pdf")}>
//         عرض PDF
//       </Button>

//       {pdfUrl && <PDFModal pdfUrl={pdfUrl} closeModal={closeModal} />}
//     </div>
//   );
// };

// export default Pdf;
// import React, { useState } from "react";
// import { Document, Page } from "react-pdf";
// import { Modal, Button } from "react-bootstrap";
// import { pdfjs } from "react-pdf";

// // تحديد المسار إلى ملف worker لـ pdf.js
// pdfjs.GlobalWorkerOptions.workerSrc =
//   "https://unpkg.com/pdfjs-dist@2.9.359/es5/build/pdf.worker.min.js";

// const PDFModal = ({ pdfUrl, closeModal }) => {
//   const [pageNumber, setPageNumber] = useState(1);

//   const goToNextPage = () => {
//     setPageNumber(pageNumber + 1);
//   };

//   const goToPrevPage = () => {
//     setPageNumber(pageNumber - 1);
//   };

//   return (
//     <Modal show={true} onHide={closeModal} centered>
//       <Modal.Header closeButton>
//         <Modal.Title>عرض PDF</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <div className="pdf-container">
//           <Document file={pdfUrl}>
//             <Page pageNumber={pageNumber} className="pdf-page" />
//           </Document>
//         </div>
//         <div>
//           <Button onClick={goToPrevPage} disabled={pageNumber <= 1}>
//             السابق
//           </Button>
//           <Button onClick={goToNextPage}>التالي</Button>
//         </div>
//       </Modal.Body>
//     </Modal>
//   );
// };

// // المكون الرئيسي
// const Pdf = () => {
//   const [pdfUrl, setPdfUrl] = useState(null);

//   const openModal = (url) => {
//     setPdfUrl(url);
//   };

//   const closeModal = () => {
//     setPdfUrl(null);
//   };

//   return (
//     <div>
//       <Button onClick={() => openModal("https://example.com/your-pdf.pdf")}>
//         عرض PDF
//       </Button>

//       {pdfUrl && <PDFModal pdfUrl={pdfUrl} closeModal={closeModal} />}
//     </div>
//   );
// };

// export default Pdf;
// components/PdfViewerModal.jsx
import React from "react";
import styles from "./Pdf.module.css"; // استيراد CSS Module

export default function Pdf({ pdfUrl, onClose }) {
  if (!pdfUrl) return null;

  return (
    <div
      className={`${styles.modalBackground} modal fade show d-block`}
      tabIndex="-1"
      onClick={onClose}
    >
      <div
        className={`${styles.modalDialog} modal-dialog modal-dialog-centered`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`${styles.modalContent} modal-content`}>
          <button
            type="button"
            className={`${styles.closeButton} btn-close`}
            aria-label="Close"
            onClick={onClose}
          ></button>
          <iframe
            src={pdfUrl}
            title="PDF Viewer"
            className={styles.iframe} // استخدام CSS Module هنا
          ></iframe>
        </div>
      </div>
    </div>
  );
}
