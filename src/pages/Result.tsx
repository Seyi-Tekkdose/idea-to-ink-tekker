
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText, Layout as LayoutIcon, Pencil, Download, ThumbsUp, ThumbsDown } from "lucide-react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface IdeaSubmission {
  idea: string;
  documentType: string;
  timestamp: string;
  response: string;
}

const mockPRD = `
# Product Requirement Document

## Overview
This document outlines the requirements for the product based on your idea.

## Objectives
- Deliver a solution that meets user needs
- Create a scalable and maintainable product
- Achieve market fit within 6 months

## User Personas
### Primary User: Sarah
- 32-year-old professional
- Tech-savvy
- Values efficiency and ease of use

## Features & Requirements
### Core Features
1. User authentication system
2. Dashboard with key metrics
3. Customizable user profiles
4. Notification system

### Technical Requirements
- Mobile responsive design
- 99.9% uptime SLA
- GDPR compliance
- API rate limiting

## Success Metrics
- User acquisition rate: 10% MoM growth
- Retention rate: >60% after 30 days
- Engagement: >5 sessions per user per week
`;

const mockFRD = `
# Functional Requirement Document

## Technical Architecture
- Frontend: React with TypeScript
- Backend: Node.js with Express
- Database: PostgreSQL
- Authentication: OAuth 2.0 with JWT

## Data Models
### User
- id: UUID
- email: String (unique)
- password: String (hashed)
- createdAt: DateTime
- lastLogin: DateTime

## API Endpoints
### Authentication
- POST /api/auth/register
- POST /api/auth/login
- POST /api/auth/refresh-token

### User Management
- GET /api/users/:id
- PATCH /api/users/:id
- DELETE /api/users/:id

## Security Requirements
- HTTPS for all communications
- Password hashing using bcrypt
- Rate limiting for all endpoints
- Input sanitization and validation

## Performance Requirements
- API response time < 200ms
- Page load time < 2 seconds
- Support for 10,000 concurrent users
`;

const mockMockup = `
# UI/UX Design Mockups

For a visual representation of your product idea, we would typically provide high-fidelity mockups. In a real implementation, this section would contain actual design files or images.

## Key UI Elements
1. Modern, clean dashboard with card-based metrics
2. Intuitive navigation with sidebar and top bar
3. Mobile-responsive layouts for all core features
4. Dark and light theme options

## User Flow
1. User lands on marketing page
2. User registers or logs in
3. User completes onboarding wizard
4. User reaches personalized dashboard
5. User can navigate to key features from dashboard

## Design System
- Typography: Sans-serif, hierarchical scaling
- Color Palette: Primary brand colors with complementary accents
- Spacing: Consistent 8px grid system
- Components: Reusable button, card, and form styles
`;

const Result = () => {
  const navigate = useNavigate();
  const [submission, setSubmission] = useState<IdeaSubmission | null>(null);
  const [content, setContent] = useState("");
  const [reviewDialogOpen, setReviewDialogOpen] = useState(false);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const [signupDialogOpen, setSignupDialogOpen] = useState(false);
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    comments: ""
  });

  useEffect(() => {
    async function fetchSubmission() {
      const storedSubmission = localStorage.getItem("tekkIdeaSubmission");
    
      if (!storedSubmission) {
        navigate("/create");
        return;
      }
      
      const parsedSubmission = JSON.parse(storedSubmission) as IdeaSubmission;
      setSubmission(parsedSubmission);
      
      // Set content based on document type
      if (parsedSubmission.documentType === "prd") {
        // setContent(mockPRD);
        setContent(parsedSubmission.response);
      } else if (parsedSubmission.documentType === "frd") {
        // setContent(mockFRD);
        setContent(parsedSubmission.response);
      } else {
        // setContent(mockMockup);
        setContent(parsedSubmission.response);
      }
    }
    fetchSubmission();
  }, [navigate]);

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([content], {type: "text/plain"});
    element.href = URL.createObjectURL(file);
    element.download = `${submission?.documentType.toUpperCase()}_${new Date().toISOString().split('T')[0]}.md`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    toast.success("Document downloaded successfully!");
  };

  const handleReviewResponse = (response: 'yes' | 'no') => {
    setReviewDialogOpen(false);
    
    if (response === 'yes') {
      setContactDialogOpen(true);
    } else {
      setSignupDialogOpen(true);
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactDialogOpen(false);
    toast.success("Thank you! Our team will contact you shortly.");
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setSignupDialogOpen(false);
    toast.success("Thanks for joining our community!");
    navigate("/");
  };

  const documentTypeIcon = () => {
    switch (submission?.documentType) {
      case "prd":
        return <FileText className="h-6 w-6 text-tekk-purple" />;
      case "frd":
        return <LayoutIcon className="h-6 w-6 text-tekk-purple" />;
      case "mockup":
        return <Pencil className="h-6 w-6 text-tekk-purple" />;
      default:
        return <FileText className="h-6 w-6 text-tekk-purple" />;
    }
  };

  const documentTypeName = () => {
    switch (submission?.documentType) {
      case "prd":
        return "Product Requirement Document";
      case "frd":
        return "Functional Requirement Document";
      case "mockup":
        return "UI/UX Design Mockup";
      default:
        return "Document";
    }
  };

  if (!submission) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div className="bg-gradient-to-br from-tekk-soft-purple to-white py-10 min-h-[40vh]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              {documentTypeIcon()}
              <h1 className="text-3xl md:text-4xl font-bold ml-2">
                Your {documentTypeName()}
              </h1>
            </div>
            
            <p className="text-gray-600 text-center mb-8">
              Here's what we've created based on your idea. You can review, download, or request expert feedback.
            </p>

            <Card className="shadow-lg animate-fade-in mb-8">
              <div className="p-6 md:p-8">
                <div className="bg-gray-50 rounded-lg p-6 overflow-auto max-h-[60vh] font-mono text-sm whitespace-pre-wrap">
                  {/* mockup is an HTML content; inject it safely into the SOM*/}
                  {submission.documentType === "mockup" ? 
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                    :
                    <pre>{content}</pre>
                  }
                </div>
              </div>
            </Card>

            <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
              <Button
                onClick={handleDownload}
                variant="outline"
                className="border-tekk-purple text-tekk-purple flex items-center gap-2"
              >
                <Download className="h-5 w-5" />
                Download Document
              </Button>
              
              <Button
                onClick={() => setReviewDialogOpen(true)}
                className="bg-tekk-purple hover:bg-tekk-secondary-purple text-white flex items-center gap-2"
              >
                Get Expert Feedback
              </Button>
            </div>

            <div className="flex justify-center gap-3 mb-8">
              <Button
                variant="ghost"
                className="text-gray-500 flex items-center gap-1"
                onClick={() => toast.success("Thanks for your feedback!")}
              >
                <ThumbsUp className="h-4 w-4" />
                Helpful
              </Button>
              <Button
                variant="ghost"
                className="text-gray-500 flex items-center gap-1"
                onClick={() => toast.success("Thanks for your feedback!")}
              >
                <ThumbsDown className="h-4 w-4" />
                Not Helpful
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Review Dialog */}
      <Dialog open={reviewDialogOpen} onOpenChange={setReviewDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Would you like to review your idea?</DialogTitle>
            <DialogDescription>
              Get personalized feedback from our product experts on your {documentTypeName().toLowerCase()}.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
            <Button 
              className="bg-tekk-purple hover:bg-tekk-secondary-purple text-white"
              onClick={() => handleReviewResponse('yes')}
            >
              Yes, I'd like expert feedback
            </Button>
            <Button 
              variant="outline"
              className="border-tekk-gray text-gray-700"
              onClick={() => handleReviewResponse('no')}
            >
              No, maybe later
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Contact Dialog */}
      <Dialog open={contactDialogOpen} onOpenChange={setContactDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Contact Information</DialogTitle>
            <DialogDescription>
              Please provide your contact details so our product experts can reach out to you.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleContactSubmit}>
            <div className="flex flex-col gap-4 py-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    value={contactData.name} 
                    onChange={(e) => setContactData({...contactData, name: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    value={contactData.email} 
                    onChange={(e) => setContactData({...contactData, email: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number (optional)</Label>
                  <Input 
                    id="phone" 
                    placeholder="+1 (555) 123-4567" 
                    value={contactData.phone} 
                    onChange={(e) => setContactData({...contactData, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="comments">Additional Comments</Label>
                  <Textarea 
                    id="comments" 
                    placeholder="Any specific aspects you'd like feedback on?" 
                    value={contactData.comments} 
                    onChange={(e) => setContactData({...contactData, comments: e.target.value})}
                  />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" className="bg-tekk-purple hover:bg-tekk-secondary-purple text-white">
                Submit Request
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Signup Dialog */}
      <Dialog open={signupDialogOpen} onOpenChange={setSignupDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Join Our Community</DialogTitle>
            <DialogDescription>
              Sign up to join our community of innovators and get early access to new features.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSignup}>
            <div className="flex flex-col gap-4 py-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-name">Your Name</Label>
                  <Input 
                    id="signup-name" 
                    placeholder="John Doe" 
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email Address</Label>
                  <Input 
                    id="signup-email" 
                    type="email" 
                    placeholder="john@example.com" 
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input 
                    id="signup-password" 
                    type="password"
                    required
                  />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" className="bg-tekk-purple hover:bg-tekk-secondary-purple text-white">
                Sign Up
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Result;
