# Sema — Product Idea

> Customer support for Kenyan businesses: one website widget, AI answers from your documents, and a human when needed.

**Stage:** MVP concept. Pricing and limits below are initial assumptions to test with pilot customers.

## 1. What we're building

Sema is an Intercom-style customer support app for the Kenyan market. A business adds a small chat widget to its website. Visitors ask questions, an AI agent answers using the business's uploaded knowledge, and a support team takes over when the AI cannot help.

Businesses manage conversations, knowledge, team members, usage, and billing in one dashboard. Sema is a paid subscription product from v1, with prices in Kenyan shillings and M-Pesa payment support.

**Promise:** Help customers get useful answers quickly without requiring the business to answer every repetitive question manually.

## 2. Who it's for

Start with small Kenyan businesses that already have a website, receive repeat questions, and can provide reliable support documents.

- Online shops: delivery areas, return policies, payment methods, and product FAQs.
- Service businesses: opening hours, service details, booking steps, and prices.
- Small software businesses: setup guides, troubleshooting, and subscription questions.

The first customer segment should be narrow: recruit a few website-based online shops or service businesses and learn from their actual conversations before expanding.

**Kenyan focus:** KES pricing, M-Pesa subscriptions, English and Kiswahili conversations, and a lightweight widget that works well on mobile browsers. These are product choices, not proof of demand; validate willingness to pay with pilots.

## 3. Core feature 1: Live chat

### Website widget

- Install through a JavaScript snippet on any compatible website.
- Customize the business name, logo, accent color, greeting, and support hours.
- Visitors can begin chatting without creating an account.
- Remember the visitor's session so they can continue a conversation on the same browser.
- Show whether the visitor is speaking with Sema AI or a human.
- Offer a visible **Talk to a person** option at any time.
- Work on desktop and mobile browsers without slowing down the host website.

### Team inbox

- Real-time messaging between visitors and support staff.
- One shared inbox with conversation history and unread indicators.
- Filter by open, waiting for a human, assigned, and resolved.
- Assign a conversation to a team member; allow reassignment.
- Show whether another teammate is already handling the conversation.
- Let agents reply, add internal notes, and resolve or reopen conversations.
- Show new-message and handoff notifications inside the dashboard.

When nobody is available, explain the business's support hours and keep the conversation in the waiting queue. Ask for optional contact details, but do not promise an automatic email reply in v1.

## 4. Core feature 2: AI support agent

### Business knowledge

Businesses upload PDFs, Word documents, plain text, and Markdown files containing FAQs, policies, service information, or support guides.

- Show each file's processing status: processing, ready, or failed.
- Extract readable text, split it into useful sections, and index it for retrieval.
- Let businesses replace or delete outdated documents.
- Remove deleted knowledge from future retrieval.
- Provide a test chat inside the dashboard before enabling AI on the website.
- Start with text-based files; show a clear error for scanned PDFs that require OCR.

### How answers work

Sema uses retrieval-augmented generation (RAG). It finds relevant sections of the business's knowledge and supplies them to the AI along with the visitor's question.

- Answer only when retrieved information supports the response.
- Use recent conversation context to understand follow-up questions.
- Support English and Kiswahili replies, subject to pilot quality checks.
- Attach source references that staff can inspect in the dashboard.
- Never invent policies, prices, availability, or promises.
- Never claim to have checked an order, issued a refund, or changed a booking; v1 has no tools for those actions.

Each business has its own isolated knowledge base. One business's documents must never appear in another business's answers.

## 5. The agent must know its limits

Every incoming visitor message passes through a routing check before generating a knowledge-based answer. The check uses conversation context, not just the latest sentence.

| Message type | Sema's behavior |
| --- | --- |
| Greeting or thanks | Give a short response and guide the visitor toward support. |
| Relevant support question | Retrieve knowledge and answer if the evidence is sufficient. |
| Unclear question | Ask a short clarifying question. |
| Unrelated request, such as a poem or generic maths | Politely decline and explain the agent's support role. |
| Missing, conflicting, or weak supporting knowledge | Say the answer is unavailable and offer a human handoff. |
| Account-specific request or action requiring staff access | Route to a human. |
| Visitor explicitly asks for a person | Route to a human immediately. |

For example: “I can help with questions about this business. Would you like help with its services or policies?”

Confidence should depend on whether the retrieved material supports the answer, rather than an AI-generated confidence percentage alone. Business-relevant arithmetic, such as explaining a documented delivery charge, should not be rejected simply because it involves numbers.

### Human handoff

- Move the conversation into the human queue with a reason and a short summary.
- Preserve the full message history so the visitor does not repeat everything.
- Pause AI replies while the conversation is waiting for or assigned to a human.
- Let an agent explicitly return the conversation to AI when appropriate.
- If staff are offline, tell the visitor honestly and keep the request queued.

### Abuse and cost controls

- Rate-limit visitors and workspaces; cap message length and AI response length.
- Treat uploaded documents and visitor text as untrusted content, never as permission to override system rules.
- Reject attempts to expose hidden instructions or other businesses' information.
- Check subscription status and remaining allowance before an AI call.
- Include classification, retrieval, retries, and document indexing in internal cost tracking.

Routing reduces unnecessary generation and abuse, but it is not a complete security boundary. Enforce access control, tenant isolation, and usage limits in the application.

## 6. Core feature 3: Billing and pricing

Billing is part of the MVP. Businesses should be able to choose a plan, pay, see usage, and understand what happens at renewal or when they reach a limit.

### Proposed monthly plans

| Plan | Price per month | Team seats | Websites | New conversations | AI replies |
| --- | ---: | ---: | ---: | ---: | ---: |
| Starter | KES 2,500 | 1 | 1 | 500 | 500 |
| Growth | KES 6,500 | 3 | 1 | 2,000 | 2,000 |
| Business | KES 15,000 | 8 | 3 | 6,000 | 6,000 |

All plans include live chat, the shared inbox, document-based AI, human handoff, English/Kiswahili support, and basic reporting. Allowances are shared across the workspace and its websites.

**Trial:** 14 days, one seat, one website, 100 new conversations, and 100 AI replies. No payment required to start. The trial ends when its time expires; usage limits may be reached earlier.

These prices are proposals, not validated market prices. Check AI, indexing, hosting, messaging, and payment costs against real usage before committing. The checkout must clearly show the total payable and any applicable taxes or fees.

### Simple usage rules

- A new conversation counts when a new visitor thread receives its first message. Reopening the same thread does not count again.
- One delivered knowledge-based AI answer or AI clarification counts as one AI reply.
- Human messages, fixed greetings, fixed off-topic refusals, and failed AI responses do not consume the AI reply allowance.
- Limit answer length internally so one counted reply cannot consume unlimited tokens.
- Usage resets at the start of each monthly billing period. Unused allowance does not roll over.
- Display usage and notify the workspace owner at 80% and 100% of either allowance.
- At the AI reply limit, pause AI and route questions to humans. Human support continues within the conversation allowance.
- At the conversation limit, stop accepting new threads, explain that chat is unavailable, and show the business's configured contact details. Existing threads remain accessible to staff.
- No automatic overage charges in v1. Businesses can upgrade; usage add-ons can come later.

### Payments and subscription management

- Make M-Pesa the first payment method, using a checkout prompt and a confirmed server-side payment result.
- Treat subscriptions as prepaid monthly access. Send a renewal reminder and ask the owner to pay again; do not assume an automatic monthly M-Pesa debit.
- Activate or extend access only after payment verification. Duplicate callbacks must not create duplicate payments or extensions.
- Show pending, successful, and failed payments; provide a status check when confirmation is delayed.
- Provide a billing page with plan, renewal date, usage, payment history, and downloadable receipts.
- Allow immediate upgrades after the prorated price difference is paid. Keep the renewal date, preserve current usage, and apply the higher limits for the remaining period.
- Apply downgrades at the next renewal, after excess seats or websites are removed.
- Cancellation stops renewal reminders; access continues until the paid period ends.
- Give a three-day renewal grace period. After that, pause the widget and AI and keep the dashboard read-only for history and billing.
- Disclose retention and deletion rules before signup; expiry must not silently delete a business's conversations.

Keep annual plans, automatic card subscriptions, custom enterprise contracts, and paid add-ons outside v1.

## 7. Business dashboard and platform administration

### Business dashboard

- **Inbox:** visitor conversations, assignments, human replies, and handoffs.
- **Knowledge:** upload, processing status, replacement, deletion, and AI test chat.
- **Widget:** installation snippet, branding, approved website domains, and support hours.
- **Team:** invitations and owner/agent roles. Owners manage billing and settings; agents handle support.
- **Billing:** plan, payments, renewal, and usage.
- **Overview:** conversation count, first-response time, AI-to-human handoffs, and remaining allowance.

### Minimal Sema admin tools

- View workspaces, subscription status, payment failures, and aggregate usage.
- Suspend abusive workspaces and investigate failed document processing.
- Review system errors and AI cost trends.
- Audit administrative actions; restrict access to customer content to justified support needs.

## 8. First-use experience

1. The owner signs up and creates a business workspace.
2. They start the trial and configure the widget and support hours.
3. They upload a small set of useful support documents.
4. They test supported questions, missing answers, and human handoff.
5. They install the widget on an approved website and confirm it works.
6. They invite staff and begin handling real conversations.
7. They choose a plan and pay through M-Pesa before the trial expires.

The first success is a real visitor receiving a useful answer or reaching the right human.

## 9. What we're not building in v1

- Email support, a ticketing system, or a public help center.
- Product tours, marketing campaigns, or advanced automation builders.
- Native mobile apps.
- WhatsApp, SMS, social-media inboxes, or voice support.
- AI actions against orders, payments, refunds, or bookings.
- Website crawling, OCR, or a large integrations marketplace.

WhatsApp may become valuable later, but the first product stays focused on website support.

## 10. Basic foundations

Keep the architecture small: a website widget, web dashboard, application backend, real-time messaging, database, document storage, background ingestion jobs, retrieval index, AI service, and payment integration.

Store workspaces, users, memberships, websites, visitors, conversations, messages, documents, subscriptions, payments, and usage records. Enforce workspace permissions on every request, message subscription, document lookup, and billing action.

Protect visitor sessions, restrict widget domains, validate file uploads, keep secrets on the server, and provide clear visitor privacy information. Define data retention, export, and deletion behavior before launch. Get a focused review of applicable Kenyan privacy and payment requirements before accepting production customers.

## 11. Build sequence and definition of done

1. **Live support:** workspaces, widget installation, visitor sessions, inbox, and real-time human replies.
2. **AI support:** document ingestion, retrieval, routing, grounded answers, and handoff.
3. **Paid access:** trial, pricing page, M-Pesa payments, usage enforcement, and renewal handling.
4. **Pilot readiness:** English/Kiswahili quality checks, permissions, abuse controls, basic reporting, and deployment on real websites.

The MVP is done when a business can install Sema on a real website, upload knowledge, receive useful AI answers, take over as a human, and pay for a working subscription. Test unsupported questions, stale or conflicting documents, duplicate payment callbacks, exhausted allowances, and offline handoffs before the pilot.

Track adoption, response times, handoff rate, answer accuracy from sampled conversations, paid conversion, AI cost per workspace, and renewals. Do not treat fewer handoffs as success if customers are getting incorrect answers.

## 12. Decisions to validate with pilot customers

- Which first segment has enough website support traffic to need Sema?
- Are the proposed prices and included allowances acceptable?
- Do English and Kiswahili answers meet the business's quality expectations?
- Can owners maintain useful, current knowledge documents?
- Does monthly M-Pesa renewal create too much friction?

**End result:** A focused Kenyan support SaaS: a widget on a real website, an AI agent that answers from uploaded documents, humans who can take over, and straightforward paid plans.
