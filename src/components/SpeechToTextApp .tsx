import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mic, MicOff, PenTool } from "lucide-react";
import SignatureModal from "./signature/SignatureModal";

interface Signature {
  type: string;
  data: string;
  date: string;
}

const SpeechToTextApp: React.FC = () => {
  const [result, setResult] = useState<string>("");
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [isSignatureModalOpen, setIsSignatureModalOpen] = useState(false);
  const [signature, setSignature] = useState<Signature | null>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  // Speech recognition setup and handlers remain unchanged
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!recognitionRef.current && SpeechRecognition) {
    const recognitionInstance = new SpeechRecognition();
    recognitionInstance.continuous = true;
    recognitionInstance.interimResults = true;
    recognitionInstance.lang = "ar-Jo";

    recognitionInstance.onstart = () => {
      setIsRecording(true);
      console.log("Recording started");
    };

    recognitionInstance.onresult = (event: SpeechRecognitionEvent) => {
      let interimResult = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          interimResult += event.results[i][0].transcript + " ";
        } else {
          interimResult += event.results[i][0].transcript;
        }
      }

      setResult(interimResult);

      if (interimResult.toLowerCase().includes("stop recording")) {
        setResult((prev) => prev.replace(/stop recording/gi, ""));
        stopRecording();
      }
    };

    recognitionInstance.onerror = (event: SpeechRecognitionErrorEvent) => {
      console.error("Speech recognition error:", event.error);
      setIsRecording(false);
    };

    recognitionInstance.onend = () => {
      setIsRecording(false);
      console.log("Speech recognition ended");
    };

    recognitionRef.current = recognitionInstance;
  }

  const startRecording = () => {
    if (recognitionRef.current) {
      setResult("");
      recognitionRef.current.start();
    }
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };

  const handleSignatureSave = (newSignature: Signature) => {
    setSignature(newSignature);
  };

  const removeSignature = () => {
    setSignature(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-7xl mx-auto bg-gray-800 rounded-xl p-8 shadow-xl border border-gray-700"
    >
      <h2 className="text-2xl font-bold text-white mb-6 text-center">
        Voice Recognition
      </h2>
      <div
        className="bg-gray-900 rounded-lg p-4 mb-6 h-40 overflow-auto
                   border border-gray-700 text-gray-300 transition-colors
                   focus-within:border-emerald-500"
      >
        {result || "Your transcribed text will appear here..."}
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex justify-center gap-4 flex-wrap">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={startRecording}
            disabled={isRecording}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors
              ${
                isRecording
                  ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                  : "bg-emerald-500 hover:bg-emerald-600 text-white"
              }`}
          >
            <Mic size={20} />
            Start Recording
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={stopRecording}
            disabled={!isRecording}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors
              ${
                !isRecording
                  ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                  : "bg-red-500 hover:bg-red-600 text-white"
              }`}
          >
            <MicOff size={20} />
            Stop Recording
          </motion.button>
        </div>

        <div className="border-t border-gray-700 my-4" />

        <div className="flex flex-col items-center gap-4">
          {signature ? (
            <div className="w-full max-w-2xl mx-auto p-4 bg-gray-900 rounded-lg border border-emerald-500/30">
              <div className="flex justify-between items-center mb-2">
                <span className="text-emerald-500 font-medium">
                  Signature Added
                </span>
                <button
                  onClick={removeSignature}
                  className="text-red-400 hover:text-red-500 transition-colors"
                >
                  Remove
                </button>
              </div>
              {signature.type === "type" ? (
                <p className="font-signature text-xl text-white">
                  {signature.data}
                </p>
              ) : (
                <img
                  src={signature.data}
                  alt="Signature"
                  className="max-h-20 mx-auto"
                />
              )}
              <p className="text-sm text-gray-400 mt-2">
                Added on {new Date(signature.date).toLocaleDateString()}
              </p>
            </div>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSignatureModalOpen(true)}
              className="flex items-center gap-2 px-6 py-3 bg-gray-700
                         hover:bg-gray-600 text-white rounded-lg transition-colors"
            >
              <PenTool size={20} />
              Add E-signature
            </motion.button>
          )}
        </div>
      </div>

      <SignatureModal
        isOpen={isSignatureModalOpen}
        onClose={() => setIsSignatureModalOpen(false)}
        onSave={handleSignatureSave}
      />
    </motion.div>
  );
};

export default SpeechToTextApp;
