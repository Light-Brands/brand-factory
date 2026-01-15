/**
 * AI Funnel Landing Page
 * The Web2 → AI-Native Transformation
 */

import React from 'react';
import {
  Button,
  Card,
  Tag,
  SparkleIcon,
} from '../components';
import { PageKey } from '../types';

interface AIFunnelPageProps {
  onNavigate: (page: PageKey) => void;
}

export const AIFunnelPage: React.FC<AIFunnelPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen">
      {/* ================================================================
       * HERO SECTION - The Hook
       * ================================================================ */}
      <section className="min-h-[100vh] relative overflow-hidden flex flex-col justify-center px-6 md:px-12 lg:px-16 pt-20">
        {/* Dramatic glow effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-radial-gradient from-wisdom-violet/12 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-radiance-gold/8 blur-[120px] rounded-full pointer-events-none animate-float" />
        <div className="absolute bottom-20 left-10 w-[300px] h-[300px] bg-wisdom-violet/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="animate-fade-in">
            <Tag variant="premium" className="mb-8 inline-flex">
              The Foundation Shift
            </Tag>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-text-primary mb-8 animate-slide-up leading-[1.1]">
            Stop Building on a
            <span className="block text-text-muted line-through decoration-radiance-gold/50 decoration-4"> Static Website</span>
            <span className="block mt-2 text-gradient-illumination">Start Building on Intelligence</span>
          </h1>

          <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up delay-200">
            We don't upgrade websites. We replace your entire digital foundation
            with an <span className="text-wisdom-violet font-semibold">AI intelligence system</span> —
            so everything you build next has no limits.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-300">
            <Button
              variant="primary"
              size="xl"
              onClick={() => onNavigate('book')}
            >
              See What's Possible
            </Button>
            <Button
              variant="outline"
              size="xl"
              onClick={() => {
                const el = document.getElementById('the-shift');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Understand The Shift
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-text-muted/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-text-muted/30 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ================================================================
       * THE PROBLEM - Web2 Limitations
       * ================================================================ */}
      <section className="section-spacing bg-depth-elevated" id="the-shift">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Tag variant="default" className="mb-4">
              The Hidden Problem
            </Tag>
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
              Your Website Is Your <span className="text-radiance-amber">Ceiling</span>
            </h2>
            <p className="text-text-secondary max-w-3xl mx-auto text-lg">
              Most businesses are operating on a Web2 foundation. Their website is the base
              of their online presence — and everything they try to build depends on it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Web2 Side - The Problem */}
            <Card elevation="elevated" className="p-8 border-l-4 border-l-radiance-amber/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-radiance-amber/5 blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-radiance-amber/10 flex items-center justify-center">
                    <span className="text-radiance-amber text-xl">⬚</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary">Web2 Foundation</h3>
                    <p className="text-text-muted text-sm">Where most businesses are stuck</p>
                  </div>
                </div>

                <ul className="space-y-4 text-text-secondary">
                  <li className="flex items-start gap-3">
                    <span className="text-radiance-amber mt-1">×</span>
                    <span>Static pages that can't learn or adapt</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-radiance-amber mt-1">×</span>
                    <span>Manual updates for every change</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-radiance-amber mt-1">×</span>
                    <span>Same experience for every visitor</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-radiance-amber mt-1">×</span>
                    <span>Plugins and patches to add "AI features"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-radiance-amber mt-1">×</span>
                    <span>Limited by what the platform allows</span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-depth-border">
                  <p className="text-text-muted text-sm italic">
                    If the foundation is limited, everything built on top is limited.
                  </p>
                </div>
              </div>
            </Card>

            {/* AI-Native Side - The Solution */}
            <Card elevation="elevated" className="p-8 border-l-4 border-l-wisdom-violet relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-wisdom-violet/10 blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-wisdom-violet/20 flex items-center justify-center glow-wisdom animate-illuminate">
                    <SparkleIcon className="text-wisdom-violet" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary">AI-Native Foundation</h3>
                    <p className="text-wisdom-soft text-sm">Where we take you</p>
                  </div>
                </div>

                <ul className="space-y-4 text-text-secondary">
                  <li className="flex items-start gap-3">
                    <span className="text-wisdom-violet mt-1">✓</span>
                    <span>Intelligence layer that learns continuously</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-wisdom-violet mt-1">✓</span>
                    <span>Automated workflows that run themselves</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-wisdom-violet mt-1">✓</span>
                    <span>Personalized experience for every visitor</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-wisdom-violet mt-1">✓</span>
                    <span>Native AI capabilities — not add-ons</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-wisdom-violet mt-1">✓</span>
                    <span>Unlimited by design — build anything</span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-depth-border">
                  <p className="text-wisdom-soft text-sm font-medium">
                    Everything you imagine building next becomes possible.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ================================================================
       * THE TRANSFORMATION VISUAL
       * ================================================================ */}
      <section className="section-spacing relative overflow-hidden">
        <div className="absolute inset-0 gradient-wisdom-glow opacity-50" />

        <div className="container-wide relative z-10">
          <div className="text-center mb-16">
            <Tag variant="premium" className="mb-4">
              The Transformation
            </Tag>
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
              This Is Not a <span className="text-text-muted">Website Upgrade</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg">
              We're not adding features to your website. We're replacing the foundation
              your entire online business sits on.
            </p>
          </div>

          {/* Transformation Diagram */}
          <div className="max-w-4xl mx-auto">
            <Card elevation="elevated" className="p-8 md:p-12">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                {/* FROM */}
                <div className="text-center flex-1">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-depth-surface border-2 border-depth-border flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl text-text-muted mb-1">📄</div>
                      <div className="text-[10px] text-text-muted uppercase tracking-wider">Web2</div>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-text-muted mb-2">Static Website</h4>
                  <p className="text-text-muted text-sm">Traditional foundation</p>
                </div>

                {/* ARROW */}
                <div className="flex items-center justify-center">
                  <div className="hidden lg:flex items-center">
                    <div className="w-24 h-1 gradient-capacity-bridge rounded-full" />
                    <div className="w-4 h-4 border-t-2 border-r-2 border-radiance-gold rotate-45 -ml-2" />
                  </div>
                  <div className="lg:hidden flex flex-col items-center">
                    <div className="h-16 w-1 gradient-capacity-bridge rounded-full" />
                    <div className="w-4 h-4 border-b-2 border-r-2 border-radiance-gold rotate-45 -mt-2" />
                  </div>
                </div>

                {/* TO */}
                <div className="text-center flex-1">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-wisdom-violet/20 to-radiance-gold/20 border-2 border-wisdom-violet/50 flex items-center justify-center glow-wisdom animate-illuminate">
                    <div className="text-center">
                      <SparkleIcon className="text-wisdom-violet mx-auto mb-1" size={28} />
                      <div className="text-[10px] text-wisdom-soft uppercase tracking-wider">AI-Native</div>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-clarity-cream mb-2">Intelligence System</h4>
                  <p className="text-wisdom-soft text-sm">Unlimited foundation</p>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-depth-border text-center">
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Your new foundation is an <span className="text-wisdom-violet font-semibold">AI intelligence layer built on OpenAI</span>.
                  Everything you build on top — automation, personalization, intelligent workflows,
                  AI-driven products — now becomes possible.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ================================================================
       * WHAT BECOMES POSSIBLE
       * ================================================================ */}
      <section className="section-spacing bg-depth-elevated">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Tag variant="default" className="mb-4">
              What Changes
            </Tag>
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
              Build What Was <span className="text-radiance-gold">Impossible</span> Before
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg">
              When the foundation changes, everything you can build on top of it changes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Automation */}
            <Card elevation="elevated" className="p-6 group hover:border-radiance-gold/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-radiance-gold/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Automation</h3>
              <p className="text-text-secondary text-sm">
                Workflows that run themselves. Decisions made automatically.
                Operations that scale without adding headcount.
              </p>
            </Card>

            {/* Personalization */}
            <Card elevation="elevated" className="p-6 group hover:border-wisdom-violet/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-wisdom-violet/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">👤</span>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Personalization</h3>
              <p className="text-text-secondary text-sm">
                Every visitor gets a unique experience. Content that adapts.
                Conversations that understand context.
              </p>
            </Card>

            {/* Intelligent Workflows */}
            <Card elevation="elevated" className="p-6 group hover:border-clarity-cream/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-clarity-cream/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Smart Workflows</h3>
              <p className="text-text-secondary text-sm">
                Processes that learn and improve. Systems that get smarter
                the more they're used. True operational intelligence.
              </p>
            </Card>

            {/* AI Products */}
            <Card elevation="elevated" className="p-6 group hover:border-radiance-amber/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-radiance-amber/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">AI Products</h3>
              <p className="text-text-secondary text-sm">
                New revenue streams. Intelligent tools for your customers.
                Products that weren't possible before AI.
              </p>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-text-muted text-lg mb-6">
              And as new AI technologies emerge, your foundation is ready for them.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================
       * THE MOMENT - Strategic Timing
       * ================================================================ */}
      <section className="section-spacing relative">
        <div className="absolute inset-0 bg-gradient-to-b from-depth-base via-depth-elevated to-depth-base opacity-50" />

        <div className="container-narrow relative z-10">
          <Card elevation="elevated" className="p-8 md:p-12 text-center border-radiance-gold/20">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-radiance-gold to-radiance-amber flex items-center justify-center shadow-illumination animate-illuminate">
                <SparkleIcon className="text-depth-base" size={32} />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              This Is <span className="text-radiance-gold">The Moment</span>
            </h2>

            <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
              Like 1995 for the web. Like 2008 for mobile. 2024-2026 is the strategic window
              for AI transformation. The businesses that move now build the new foundation.
              The ones that wait will be playing catch-up for years.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                onClick={() => onNavigate('book')}
              >
                Start Your Transformation
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* ================================================================
       * WHO THIS IS FOR
       * ================================================================ */}
      <section className="section-spacing bg-depth-elevated">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Tag variant="default" className="mb-4">
              Is This For You?
            </Tag>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              This Transformation Is For Businesses Who...
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Right Fit */}
            <div>
              <h3 className="text-xl font-bold text-clarity-cream mb-6 flex items-center gap-2">
                <span className="text-wisdom-violet">✓</span> Ready to Transform
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-text-secondary">
                  <span className="text-wisdom-violet mt-1">•</span>
                  <span>See AI as a strategic priority, not a "nice to have"</span>
                </li>
                <li className="flex items-start gap-3 text-text-secondary">
                  <span className="text-wisdom-violet mt-1">•</span>
                  <span>Want to build something ambitious, not just add chatbots</span>
                </li>
                <li className="flex items-start gap-3 text-text-secondary">
                  <span className="text-wisdom-violet mt-1">•</span>
                  <span>Understand that real transformation requires a new foundation</span>
                </li>
                <li className="flex items-start gap-3 text-text-secondary">
                  <span className="text-wisdom-violet mt-1">•</span>
                  <span>Ready to invest in building for the next decade</span>
                </li>
                <li className="flex items-start gap-3 text-text-secondary">
                  <span className="text-wisdom-violet mt-1">•</span>
                  <span>Want partners who understand both AI and business</span>
                </li>
              </ul>
            </div>

            {/* Not Right Fit */}
            <div>
              <h3 className="text-xl font-bold text-text-muted mb-6 flex items-center gap-2">
                <span className="text-radiance-amber">×</span> Not The Right Fit
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-text-muted">
                  <span className="text-radiance-amber/50 mt-1">•</span>
                  <span>Looking for a website redesign with AI features</span>
                </li>
                <li className="flex items-start gap-3 text-text-muted">
                  <span className="text-radiance-amber/50 mt-1">•</span>
                  <span>Want to "wait and see" how AI develops</span>
                </li>
                <li className="flex items-start gap-3 text-text-muted">
                  <span className="text-radiance-amber/50 mt-1">•</span>
                  <span>Looking for the cheapest solution possible</span>
                </li>
                <li className="flex items-start gap-3 text-text-muted">
                  <span className="text-radiance-amber/50 mt-1">•</span>
                  <span>Not ready to commit to real transformation</span>
                </li>
                <li className="flex items-start gap-3 text-text-muted">
                  <span className="text-radiance-amber/50 mt-1">•</span>
                  <span>Just want someone to "add AI" to existing site</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
       * HOW IT WORKS
       * ================================================================ */}
      <section className="section-spacing">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Tag variant="default" className="mb-4">
              The Process
            </Tag>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              How We Build Your New Foundation
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-depth-surface border-2 border-radiance-gold flex items-center justify-center">
                <span className="text-radiance-gold text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Discovery</h3>
              <p className="text-text-secondary">
                We map your business operations, identify high-value AI opportunities,
                and design your intelligence architecture.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-depth-surface border-2 border-wisdom-violet flex items-center justify-center">
                <span className="text-wisdom-violet text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Build</h3>
              <p className="text-text-secondary">
                We construct your AI intelligence layer — the new foundation
                that everything else will be built on.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-depth-surface border-2 border-clarity-cream flex items-center justify-center">
                <span className="text-clarity-cream text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Launch & Evolve</h3>
              <p className="text-text-secondary">
                Your AI-native system goes live. As your business evolves
                and AI advances, your foundation grows with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
       * FINAL CTA
       * ================================================================ */}
      <section className="section-spacing bg-gradient-to-b from-depth-base via-depth-elevated to-depth-base relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-radial-gradient from-wisdom-violet/10 to-transparent blur-3xl pointer-events-none" />

        <div className="container-narrow text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
            Ready to Change Your
            <span className="block text-radiance-gold mt-2">Foundation?</span>
          </h2>

          <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
            The shift from Web2 to AI-native isn't about adding features.
            It's about building something fundamentally different.
            <span className="text-clarity-cream"> Let's talk about what's possible for your business.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              variant="primary"
              size="xl"
              onClick={() => onNavigate('book')}
            >
              Book Transformation Call
            </Button>
            <Button
              variant="secondary"
              size="xl"
              onClick={() => onNavigate('contact')}
            >
              Ask Questions First
            </Button>
          </div>

          <p className="text-text-muted text-sm">
            Free 30-minute call. No sales pressure. Just clarity on what's possible.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AIFunnelPage;
