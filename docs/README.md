# Elevate Basketball - Marketing Website

## Overview
Static marketing website for Elevate Basketball, a youth basketball coaching business in Portland, OR run by Coach Liam Mishcon.

**Live URL:** https://elevate-bb.com  
**Hosting:** Vercel  
**Domain:** Custom domain via Vercel

## Tech Stack
- **Framework:** Static HTML/CSS/JS (no build step)
- **Styling:** Custom CSS with CSS variables
- **Fonts:** Inter (Google Fonts)
- **Analytics:** Vercel Analytics + Custom Supabase tracking
- **Forms:** FormSubmit.co (sends to adam@mish.com, CC: bettysideya@gmail.com)

## Folder Structure
```
elevate-basketball/
├── index.html              # Main landing page
├── sample-lesson.html      # Simple sample lesson page (active)
├── sample-lesson-detailed.html  # Detailed tabbed version (saved for later)
├── basketball-brain.html   # Article: why basketball builds smarter kids
├── thanks.html             # Form submission confirmation page
├── styles.css              # All styles (single file)
├── tracking.js             # Custom analytics tracking script
├── images/                 # Image assets
├── references/             # Design references
└── docs/                   # Documentation (this folder)
```

## Design System

### Colors (CSS Variables in styles.css)
```css
--navy: #0a0a0f          /* Primary background */
--navy-light: #12121a    /* Card backgrounds */
--navy-mid: #1a1a2e      /* Hover states */
--orange: #f97316        /* Primary accent (CTAs, highlights) */
--white: #ffffff         /* Primary text */
--gray: #9ca3af          /* Secondary text */
```

### Typography
- **Font:** Inter
- **Weights:** 400 (body), 500-600 (medium), 700-900 (headings)
- **Headings:** Large, bold, white
- **Body:** Gray/white with good line-height

### Components
- **Nav:** Fixed, transparent → solid on scroll
- **Hero:** Full-width gradient background
- **Sections:** Alternating dark backgrounds
- **Cards:** Rounded corners, subtle borders
- **Buttons:** Orange primary, ghost secondary
- **Forms:** Dark inputs with orange focus states

## Analytics

### Vercel Analytics
Built-in page views and web vitals. Enabled in Vercel dashboard.

### Custom Tracking (tracking.js)
Tracks to Supabase tables:
- `page_views` - Every page load with UTM params
- `conversions` - Form submissions

### UTM Structure for Ads
```
?utm_source=nextdoor
&utm_medium=paid
&utm_campaign=pdx
&utm_content=youth_basketball_training
&utm_term=feed|search|rhr|fsf
```

## Pages

### index.html (Home)
- Hero with tagline
- About Coach Liam
- Training skills grid
- Testimonials
- Pricing cards
- Contact form

### sample-lesson.html
Simple overview of what a session looks like.

### sample-lesson-detailed.html (Not linked)
Tabbed beginner/intermediate breakdown with coach's notes. Saved for potential future use.

### basketball-brain.html
Long-form article about cognitive benefits of basketball.

### thanks.html
Confirmation page after form submission. Tracks conversion.

## Deployment
```bash
# Push to GitHub triggers Vercel auto-deploy
git add . && git commit -m "message" && git push

# Or manual deploy
vercel --prod
```

## Contact Form
- **Service:** FormSubmit.co
- **Primary:** adam@mish.com
- **CC:** bettysideya@gmail.com
- **Redirect:** /thanks.html
- **Tracking:** Fires `trackConversion('contact_form')` on submit

## Future Considerations
- Consider using the detailed sample-lesson-detailed.html
- Add more testimonials as they come in
- Potential blog/articles section
- Integration with booking app
