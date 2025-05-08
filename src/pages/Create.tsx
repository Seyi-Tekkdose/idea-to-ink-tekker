
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { FileText, Layout as LayoutIcon, Pencil } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const Create = () => {
  const navigate = useNavigate();
  const [idea, setIdea] = useState("");
  const [documentType, setDocumentType] = useState("prd");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (idea.trim().length < 10) {
      toast.error("Please provide more details about your idea");
      return;
    }

    setIsSubmitting(true);

    // Simulate processing time
    setTimeout(() => {
      setIsSubmitting(false);
      // Store the data in localStorage for demo purposes
      localStorage.setItem("tekkIdeaSubmission", JSON.stringify({
        idea,
        documentType,
        timestamp: new Date().toISOString()
      }));
      
      navigate("/result");
    }, 2000);
  };

  return (
    <Layout>
      <div className="bg-gradient-to-br from-tekk-soft-purple to-white py-10 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-3">
              Transform Your Idea
            </h1>
            <p className="text-gray-600 text-center mb-8">
              Describe your idea in detail, and we'll generate the documentation you need.
            </p>

            <Card className="shadow-lg animate-fade-in">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <Label htmlFor="idea" className="text-lg font-medium mb-2 block">
                      Describe your idea
                    </Label>
                    <Textarea
                      id="idea"
                      placeholder="Provide as much detail as possible about your product idea, target audience, key features, and goals..."
                      className="min-h-[200px] p-4 text-base"
                      value={idea}
                      onChange={(e) => setIdea(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-8">
                    <Label className="text-lg font-medium mb-4 block">
                      What would you like to generate?
                    </Label>
                    <RadioGroup
                      value={documentType}
                      onValueChange={setDocumentType}
                      className="grid grid-cols-1 md:grid-cols-3 gap-4"
                    >
                      <div className={`border-2 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer transition-all ${
                        documentType === "prd" ? "border-tekk-purple bg-tekk-soft-purple/20" : "border-gray-200"
                      }`}>
                        <RadioGroupItem value="prd" id="prd" className="sr-only" />
                        <Label htmlFor="prd" className="cursor-pointer flex flex-col items-center">
                          <FileText className="h-10 w-10 mb-2 text-tekk-purple" />
                          <span className="font-medium text-lg">PRD</span>
                          <span className="text-sm text-center text-gray-500 mt-1">
                            Product Requirement Document
                          </span>
                        </Label>
                      </div>
                      
                      <div className={`border-2 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer transition-all ${
                        documentType === "frd" ? "border-tekk-purple bg-tekk-soft-purple/20" : "border-gray-200"
                      }`}>
                        <RadioGroupItem value="frd" id="frd" className="sr-only" />
                        <Label htmlFor="frd" className="cursor-pointer flex flex-col items-center">
                          <LayoutIcon className="h-10 w-10 mb-2 text-tekk-purple" />
                          <span className="font-medium text-lg">FRD</span>
                          <span className="text-sm text-center text-gray-500 mt-1">
                            Functional Requirement Document
                          </span>
                        </Label>
                      </div>
                      
                      <div className={`border-2 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer transition-all ${
                        documentType === "mockup" ? "border-tekk-purple bg-tekk-soft-purple/20" : "border-gray-200"
                      }`}>
                        <RadioGroupItem value="mockup" id="mockup" className="sr-only" />
                        <Label htmlFor="mockup" className="cursor-pointer flex flex-col items-center">
                          <Pencil className="h-10 w-10 mb-2 text-tekk-purple" />
                          <span className="font-medium text-lg">Mockup</span>
                          <span className="text-sm text-center text-gray-500 mt-1">
                            Visual Design Mockups
                          </span>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-tekk-purple hover:bg-tekk-secondary-purple text-white py-6 text-lg font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Generating..." : "Generate Document"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Create;
