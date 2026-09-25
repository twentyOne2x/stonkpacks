// Arabic (العربية): merges every segment into the flat dictionary that
// royaleI18n.ts imports. This follows the shared segment structure used by the
// other locales; surface keys belong in their matching segment file.
import core from "./core";
import board from "./board";
import cinema from "./cinema";
import arena from "./arena";
import onboarding from "./onboarding";
import docs from "./docs";
import pages from "./pages";
import chat from "./chat";
import misc from "./misc";

export const ar: Record<string, string> = {
  ...core,
  ...board,
  ...cinema,
  ...arena,
  ...onboarding,
  ...docs,
  ...pages,
  ...chat,
  ...misc,
};
