// Ukrainian (Українська): merge of all nine Royale dictionary segments.
import core from "./core";
import board from "./board";
import cinema from "./cinema";
import arena from "./arena";
import onboarding from "./onboarding";
import docs from "./docs";
import pages from "./pages";
import chat from "./chat";
import misc from "./misc";

export const uk: Record<string, string> = {
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
