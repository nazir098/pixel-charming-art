# Reposition WISHTEK for B2B Laptop Repair

## Goal
Make B2B laptop repair the primary laptop-repair offering while keeping the broader IT services portfolio as the company’s main business focus. Retain consumer/individual repair language only where it is necessary, and remove doorstep-first positioning from customer-facing pages.

## Changes
1. **Homepage and SEO**
   - Rework hero carousel copy so enterprise IT services lead and B2B laptop repair is the secondary repair offering.
   - Replace doorstep, home pickup, delivery, and consumer-focused wording with business laptop repair language: office fleets, employee devices, IT teams, bulk repairs, asset handling, SLAs, and corporate support.
   - Update homepage headings, service-area copy, FAQs, testimonials, repair section, gallery labels, and final CTA for Gurgaon/Delhi NCR businesses.
   - Refresh page metadata and business structured-data description to emphasize B2B laptop repair and managed IT services.

2. **B2B laptop repair flow**
   - Reframe the existing booking page as a business laptop repair request page.
   - Replace pickup address and preferred pickup fields with business details such as company name, office location, fleet/device count, issue category, and preferred support window.
   - Update WhatsApp and email subject/message text to use B2B service terminology.
   - Keep the existing contact channels and route structure working.

3. **Services, pricing, and contact pages**
   - Update repair service cards, pricing labels, repair-plan copy, and calls to action for corporate laptop repair and fleet support.
   - Update the inquiry form’s repair option, helper text, metadata, and direct-contact prompts for business enquiries.
   - Ensure IT service detail pages consistently speak to business buyers, procurement teams, and IT managers.

4. **About, footer, legal, and shared UI**
   - Rewrite About page positioning around B2B technology support, corporate laptop repair, and enterprise IT delivery.
   - Update footer and sticky WhatsApp messages to invite business support requests rather than doorstep repair.
   - Replace outdated doorstep/personal-device language in Terms, Privacy, and Refund pages with company-device, business-service, and corporate engagement wording while preserving applicable repair protections.
   - Keep navigation and existing URLs stable so current links and SEO paths do not break.

5. **Backend-ready content boundary**
   - Keep the existing service data layer intact and update its static repair/service labels and descriptions so the later Spring Boot replacement receives B2B-ready defaults.
   - Avoid changing the API contract or adding backend persistence.

## Validation
- Search the project again for outdated doorstep-first, home-pickup, and consumer-first copy.
- Verify every page’s title, description, Open Graph text, and visible H1 matches the new B2B positioning.
- Check the inquiry and booking flows still preselect services and generate correct WhatsApp/email messages.
- Confirm the application builds cleanly and inspect the preview for homepage, services, booking, inquiry, pricing, and About pages.

## Technical details
- Preserve route paths such as `/book` and `/inquire` for compatibility.
- Use the existing semantic design tokens and Button/form components.
- No backend, database, authentication, or deployment changes are included.
