import { Trophy, Users, ShieldCheck } from "lucide-react";
import { Typography } from "@/components/ui/Typography";
function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl space-y-20">
    <section className="text-center max-w-3xl mx-auto space-y-6">
      <span className="text-xs font-semibold tracking-widest text-primary uppercase">
        Our Move
      </span>
      <Typography
        variant="h1"
        className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
        We believe sport has the power to move the world.
      </Typography>
      <Typography
        variant="p"
        className="text-lg text-muted-foreground leading-relaxed">
        Founded in 2024, our mission is to bring inspiration and innovation to
        every athlete. We provide premium sports gear that combines
        cutting-edge technology with minimalist aesthetics.
      </Typography>
    </section>

    <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-12 border-y bg-gray-300/50 w-full border-border/60">
      <div className="text-center space-y-2">
        <div className="text-4xl font-bold tracking-tight">10K+</div>
        <div className="text-sm text-muted-foreground uppercase tracking-wider">
          Happy Athletes
        </div>
      </div>
      <div className="text-center space-y-2">
        <div className="text-4xl font-bold tracking-tight">50+</div>
        <div className="text-sm text-muted-foreground uppercase tracking-wider">
          Premium Brands
        </div>
      </div>
      <div className="text-center space-y-2">
        <div className="text-4xl font-bold tracking-tight">24/7</div>
        <div className="text-sm text-muted-foreground uppercase tracking-wider">
          Expert Support
        </div>
      </div>
    </section>

    <section className="space-y-12">
      <div className="text-center">
        <Typography
          variant="h2"
          className="text-2xl md:text-3xl font-bold tracking-tight">
          Why Choose Us
        </Typography>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 rounded-xl border bg-card/50 space-y-4">
          <Trophy className="w-8 h-8 text-primary" />
          <Typography variant="h3" className="text-lg font-bold">
            Premium Quality
          </Typography>
          <Typography
            variant="p"
            className="text-sm text-muted-foreground leading-relaxed">
            Every product in our catalog undergoes rigorous testing to
            guarantee ultimate durability.
          </Typography>
        </div>

        <div className="p-6 rounded-xl border bg-card/50 space-y-4">
          <Users className="w-8 h-8 text-primary" />
          <Typography variant="h3" className="text-lg font-bold">
            Community Driven
          </Typography>
          <Typography
            variant="p"
            className="text-sm text-muted-foreground leading-relaxed">
            We host and support local sports events to foster a healthier and
            more active community.
          </Typography>
        </div>

        <div className="p-6 rounded-xl border bg-card/50 space-y-4">
          <ShieldCheck className="w-8 h-8 text-primary" />
          <Typography variant="h3" className="text-lg font-bold">
            Sustainability
          </Typography>
          <Typography
            variant="p"
            className="text-sm text-muted-foreground leading-relaxed">
            We partner with brands that actively use recycled materials and
            ethical manufacturing.
          </Typography>
        </div>
      </div>
    </section>
  </div>
  )
}

export default AboutUsPage
