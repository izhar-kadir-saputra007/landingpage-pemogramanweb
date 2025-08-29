"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  MessageCircle,
  Users,
  Zap,
  Star,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Smartphone,
  BarChart3,
  Clock,
  Shield,
} from "lucide-react"

export default function SupportalLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [email, setEmail] = useState("")

  // Smooth scroll animation on mount
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
        }
      })
    }, observerOptions)

    const animateElements = document.querySelectorAll(".animate-on-scroll")
    animateElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechFlow Agency",
      content:
        "Supportal transformed our customer support. Response times dropped by 80% and client satisfaction is at an all-time high.",
      avatar: "/professional-woman-diverse.png",
    },
    {
      name: "Michael Chen",
      role: "Operations Director, Digital Solutions",
      content:
        "The analytics dashboard gives us insights we never had before. We can now predict support needs and staff accordingly.",
      avatar: "/professional-man.png",
    },
    {
      name: "Emily Rodriguez",
      role: "Support Manager, Creative Studio",
      content:
        "Our team loves the mobile app. We can handle urgent tickets even when we're not at our desks. Game changer!",
      avatar: "/professional-woman-smiling.png",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold text-primary">Supportal</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-foreground hover:text-primary transition-colors">
                  Home
                </a>
                <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                  Features
                </a>
                <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">
                  Testimonials
                </a>
                <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </a>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </div>
            </nav>

            <div className="hidden md:block">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Get Started</Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-foreground hover:text-primary">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <a href="#home" className="block px-3 py-2 text-foreground hover:text-primary">
                Home
              </a>
              <a href="#features" className="block px-3 py-2 text-muted-foreground hover:text-primary">
                Features
              </a>
              <a href="#testimonials" className="block px-3 py-2 text-muted-foreground hover:text-primary">
                Testimonials
              </a>
              <a href="#pricing" className="block px-3 py-2 text-muted-foreground hover:text-primary">
                Pricing
              </a>
              <a href="#contact" className="block px-3 py-2 text-muted-foreground hover:text-primary">
                Contact
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 lg:py-32 animate-on-scroll">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                  Ultimate support system for leading agencies
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                  Transform your customer support with our intelligent platform. Reduce response times, increase
                  satisfaction, and scale your support operations effortlessly.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-border hover:bg-muted bg-transparent">
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>No credit card required</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img src="/person-with-laptop-and-chat-bubbles-support-system.png" alt="Support system illustration" className="w-full h-auto" />
              </div>
              {/* Floating elements */}
              <div className="absolute top-10 right-10 animate-bounce">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="absolute bottom-20 left-10 animate-pulse">
                <div className="bg-secondary/10 p-3 rounded-full">
                  <Zap className="h-6 w-6 text-secondary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30 animate-on-scroll">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-card-foreground">24/7 Instant Support</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our AI-powered system ensures your customers get instant responses around the clock, improving
                      satisfaction and reducing wait times.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <BarChart3 className="h-8 w-8 text-secondary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-card-foreground">Advanced Analytics</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Get detailed insights into your support performance with comprehensive analytics and reporting
                      tools that help you optimize operations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Premium Features */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-secondary/10 text-secondary">
                  Premium Features
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
                  Meet our premium features that will make you wow 🤩
                </h2>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Unlock the full potential of your support operations with our advanced feature set designed for
                  growing agencies.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Advanced ticket routing</h4>
                    <p className="text-sm text-muted-foreground">
                      Automatically route tickets to the right team members based on expertise and availability.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Custom integrations</h4>
                    <p className="text-sm text-muted-foreground">
                      Connect with your existing tools and workflows seamlessly.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Advanced reporting suite</h4>
                    <p className="text-sm text-muted-foreground">
                      Deep insights with customizable dashboards and automated reports.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/modern-analytics-dashboard.png"
                alt="Premium features dashboard"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-20 animate-on-scroll">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
                  Built in one app to make instant reply with in lowest minutes ⚡
                </h2>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Our mobile app ensures you never miss a critical support request. Handle tickets on the go with full
                  functionality at your fingertips.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Smartphone className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">Mobile first design</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">Real-time notifications</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">Secure & encrypted</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">Lightning fast</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/mobile-app-interface-showing-support-tickets-and-c.png"
                alt="Mobile app interface"
                className="w-full h-auto max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-20 bg-slate-800 text-white animate-on-scroll">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-balance">
                  Introduce quality feature that boost your website rank & performance
                </h2>
                <p className="text-slate-300 leading-relaxed text-pretty">
                  Our advanced analytics engine provides deep insights into your support operations, helping you
                  identify trends, optimize performance, and deliver exceptional customer experiences.
                </p>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Explore Analytics
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="relative">
              <img
                src="/analytics-dashboard-with-charts-graphs-and-perform.png"
                alt="Analytics dashboard"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-muted/30 animate-on-scroll">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">What did you pick?</h2>
            <p className="text-muted-foreground text-lg text-pretty">Choose the plan that fits your agency's needs</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 bg-card border-border">
              <CardContent className="p-0 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">Basic Pack</h3>
                  <p className="text-muted-foreground">Perfect for small teams getting started</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-sm">Up to 5 team members</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-sm">Basic ticket management</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-sm">Email support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-sm">Basic reporting</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full border-border hover:bg-muted bg-transparent">
                  Choose Basic
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 bg-primary text-primary-foreground border-primary relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-secondary text-secondary-foreground">Most Popular</Badge>
              </div>
              <CardContent className="p-0 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Premium Pack</h3>
                  <p className="text-primary-foreground/80">For growing agencies that need more</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary-foreground" />
                    <span className="text-sm">Unlimited team members</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary-foreground" />
                    <span className="text-sm">Advanced ticket routing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary-foreground" />
                    <span className="text-sm">24/7 priority support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary-foreground" />
                    <span className="text-sm">Advanced analytics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary-foreground" />
                    <span className="text-sm">Custom integrations</span>
                  </div>
                </div>

                <Button className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  Choose Premium
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 animate-on-scroll">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              What client say about us
            </h2>
            <p className="text-muted-foreground text-lg text-pretty">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-card-foreground leading-relaxed text-pretty">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-slate-800 text-white animate-on-scroll">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">Subscribe to get notified about update</h2>
              <p className="text-slate-300 text-lg text-pretty max-w-2xl mx-auto">
                Be the first to know about new features, updates, and exclusive offers from Supportal
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <span className="text-2xl font-bold text-primary">Supportal</span>
              <p className="text-slate-400 text-sm leading-relaxed">
                The ultimate support system for leading agencies. Transform your customer support today.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Product</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">
                  Features
                </a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">
                  Pricing
                </a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">
                  Integrations
                </a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">
                  API
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">
                  About
                </a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">
                  Blog
                </a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">
                  Careers
                </a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">
                  Contact
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Support</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">
                  Help Center
                </a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">
                  Documentation
                </a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">
                  Status
                </a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center">
            <p className="text-slate-400 text-sm">© 2024 Supportal. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style jsx>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }
        
        .animate-fade-in-up {
          opacity: 1;
          transform: translateY(0);
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  )
}
