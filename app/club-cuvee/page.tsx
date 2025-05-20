import Image from 'next/image';
import { SectionWrapper } from '@/components/section-wrapper';
import { FeatureSection } from '@/components/feature-section';
import { FeatureCard } from '@/components/feature-card';
import { UIShowcase } from '@/components/ui-showcase';
import { CTASection } from '@/components/cta-section';
import { Wine, Database, Sparkles, Users } from 'lucide-react';

export default function ClubCuvee() {
  const mockUiImages = [
    {
      src: "https://images.pexels.com/photos/2553424/pexels-photo-2553424.jpeg",
      alt: "Club Cuvée dashboard UI"
    },
    {
      src: "https://images.pexels.com/photos/5585840/pexels-photo-5585840.jpeg",
      alt: "Wine recommendation interface"
    },
    {
      src: "https://images.pexels.com/photos/7129701/pexels-photo-7129701.jpeg",
      alt: "Member profile view"
    }
  ];

  return (
    <>
      <SectionWrapper className="pt-32 md:pt-40 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4255486/pexels-photo-4255486.jpeg')] bg-cover bg-center opacity-10 z-0" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">Club Cuvée</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            A wine membership platform that connects restaurants' wine inventory, guest data, and a custom recommendation algorithm.
          </p>
        </div>
      </SectionWrapper>
      
      <FeatureSection
        title="Transform Your Wine Program"
        description="Club Cuvée helps restaurants create personalized wine experiences by connecting inventory data with guest preferences through our proprietary AI recommendation engine."
        reverse={false}
      >
        <UIShowcase images={mockUiImages} />
      </FeatureSection>
      
      <SectionWrapper className="bg-muted">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Key Features</h2>
          <p className="text-muted-foreground md:text-lg">
            Our intelligent platform brings your wine program into the digital age with powerful tools built specifically for restaurants.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeatureCard
            title="Inventory Syncing"
            description="Seamlessly connect with your existing POS and inventory systems to maintain an accurate, real-time wine database."
            icon={<Database className="h-10 w-10" />}
            delay={0}
          />
          <FeatureCard
            title="AI Pairing Engine"
            description="Leverage our proprietary algorithm to recommend wines based on guest preferences, order history, and menu selections."
            icon={<Sparkles className="h-10 w-10" />}
            delay={1}
          />
          <FeatureCard
            title="Guest Insights"
            description="Build detailed profiles of member preferences and purchase history to enhance personalization and loyalty."
            icon={<Users className="h-10 w-10" />}
            delay={2}
          />
          <FeatureCard
            title="Digital Wine Lists"
            description="Create beautiful, dynamic wine lists that update automatically and include rich content about each selection."
            icon={<Wine className="h-10 w-10" />}
            delay={3}
          />
        </div>
      </SectionWrapper>
      
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Elevate Your Wine Experience</h2>
            <p className="text-muted-foreground mb-6">
              Club Cuvée transforms how restaurants approach wine service, creating memorable experiences that build loyalty while increasing wine sales and inventory efficiency.
            </p>
            <p className="text-muted-foreground mb-6">
              Our platform helps sommeliers and wine directors leverage their expertise at scale, giving every guest access to personalized recommendations typically reserved for VIPs.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Average 24% increase in wine sales for partner restaurants</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Reduce wine inventory costs by 15% through intelligent purchasing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Boost member retention with personalized wine journeys</span>
              </li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="https://images.pexels.com/photos/2995323/pexels-photo-2995323.jpeg"
              alt="Restaurant wine service"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </SectionWrapper>
      
      <CTASection
        title="Ready to revolutionize your wine program?"
        description="Join leading restaurants already using Club Cuvée to create exceptional wine experiences."
        buttonText="Request Access"
        type="demo"
      />
    </>
  );
}