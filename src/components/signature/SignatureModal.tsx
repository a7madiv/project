import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Edit3, Type, Upload, Check, Trash2 } from "lucide-react";
import SignaturePad from "./SignaturePad"; // Assuming it's in the same directory

interface SignatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (signature: { type: string; data: string; date: string }) => void;
}

export default function SignatureModal({
  isOpen,
  onClose,
  onSave,
}: SignatureModalProps) {
  const [activeTab, setActiveTab] = useState<"draw" | "type" | "upload">(
    "draw"
  );
  const [typedSignature, setTypedSignature] = useState("");
  const [uploadedSignature, setUploadedSignature] = useState<string | null>(
    null
  );
  const signaturePadRef = useRef<any>(null);

  const handleSave = () => {
    let signatureData = "";

    switch (activeTab) {
      case "draw":
        signatureData = signaturePadRef.current?.toDataURL() || "";
        break;
      case "type":
        signatureData = typedSignature;
        break;
      case "upload":
        signatureData = uploadedSignature || "";
        break;
    }

    if (signatureData) {
      onSave({
        type: activeTab,
        data: signatureData,
        date: new Date().toISOString(),
      });
      onClose();
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedSignature(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gray-800 rounded-xl p-6 w-[90%] max-w-lg"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-white">
                Add Your Signature
              </h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex gap-4 mb-6">
              {[
                { id: "draw" as const, icon: Edit3, label: "Draw" },
                { id: "type" as const, icon: Type, label: "Type" },
                { id: "upload" as const, icon: Upload, label: "Upload" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg
                    transition-colors ${
                      activeTab === tab.id
                        ? "bg-emerald-500 text-white"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                >
                  <tab.icon size={18} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            <div className="mb-6">
              {activeTab === "draw" && (
                <div className="bg-white rounded-lg p-4 h-48">
                  <SignaturePad ref={signaturePadRef} />
                </div>
              )}

              {activeTab === "type" && (
                <div className="space-y-4">
                  <input
                    type="text"
                    value={typedSignature}
                    onChange={(e) => setTypedSignature(e.target.value)}
                    placeholder="Type your signature"
                    className="w-full px-4 py-3 bg-gray-700 rounded-lg text-white
                             placeholder-gray-400 focus:outline-none focus:ring-2
                             focus:ring-emerald-500"
                  />
                  <p className="text-gray-400 text-sm">
                    Preview:{" "}
                    <span className="font-signature text-lg text-white">
                      {typedSignature}
                    </span>
                  </p>
                </div>
              )}

              {activeTab === "upload" && (
                <div className="space-y-4">
                  <label className="block">
                    <span className="sr-only">Choose signature image</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="block w-full text-sm text-gray-400
                               file:mr-4 file:py-2 file:px-4
                               file:rounded-full file:border-0
                               file:text-sm file:font-semibold
                               file:bg-emerald-500 file:text-white
                               hover:file:bg-emerald-600"
                    />
                  </label>
                  {uploadedSignature && (
                    <div className="relative">
                      <img
                        src={uploadedSignature}
                        alt="Uploaded signature"
                        className="max-h-32 mx-auto"
                      />
                      <button
                        onClick={() => setUploadedSignature(null)}
                        className="absolute top-2 right-2 p-1 bg-red-500 rounded-full
                                 text-white hover:bg-red-600 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="flex justify-end gap-4">
              <button
                onClick={onClose}
                className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-emerald-500 text-white rounded-lg
                         hover:bg-emerald-600 transition-colors flex items-center gap-2"
              >
                <Check size={18} />
                Add Signature
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
