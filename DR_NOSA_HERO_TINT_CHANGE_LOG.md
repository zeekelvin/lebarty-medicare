# Dr. Nosa Hero Tint Feedback Log

Timestamp: 2026-09-15 11:16:13 -04:00

## Conversation Summary

Dr. Nosa first reported that the service-page hero images were too dark. The overlay was brightened, and he later said the first/home pages looked good, but the interior service pages still felt too blue. A greenish tint was tried for the shared interior hero treatment.

After reviewing the green version, the feedback was that the green was still too present and was covering the natural colors of the images. The latest request is to try a red treatment from the Lebarty brand palette that blends better and does not wash over the photos.

## Current State Before This Change

- Branch: `ci/staging-pipeline`
- `git fetch --prune origin`: completed
- `git pull --ff-only`: already up to date
- Tracked files were clean before implementation.
- Existing untracked files were left untouched:
  - `02_EMR_Ground_Truth.md`
  - `CLAUDE_FIXES_NEEDED.md`

## Implementation Decision

The homepage hero is not changed because Dr. Nosa said the first pages look good. The change is limited to the shared interior hero component used by services and other inner pages: `web/src/components/ui/PageHero.tsx`.

The green overlay is replaced with a muted, dark brand-red/maroon overlay:

- Base background: `#3A0718`
- Left text-side overlay: `#3A0718` at high opacity for legibility
- Middle/right image area: much lower opacity so the image color stays natural
- Eyebrow remains light pink `#FBC9DF` for contrast

## Files Changed

- `web/src/components/ui/PageHero.tsx`
- `DR_NOSA_HERO_TINT_CHANGE_LOG.md`

## Verification Plan

Run `npm run typecheck` in `web`.

Start local dev server and review:

- `/`
- `/services`
- `/services/pediatrics`
- `/services/laboratory`
- `/services/emergency-services`
- `/about/dr-lebarty`
- `/care-packages`

Acceptance criteria:

- Homepage remains visually unchanged.
- Interior hero tint reads red/warm instead of green.
- Photos keep their natural color and are not heavily covered.
- White hero text remains readable.
- No commit or push until local review is approved.

## Follow-up Adjustment

Timestamp: 2026-09-15 11:24:03 -04:00

After local review, the red treatment was still too strong and made the hero images less clear. The overlay was reduced again so the image keeps more of its natural color:

- Horizontal overlay changed from `/86 /28 /0` to `/60 /8 /0`.
- Bottom overlay changed from `/42` to `/10`.
- Top red overlay removed.
- Subtle red text shadows were added to the eyebrow, heading, and intro text so readability does not depend on covering the image.
