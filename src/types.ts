import { ActionConfig } from "custom-card-helpers";

export interface CanvasGuageCardConfig {
  entity?: string;
  name?: string;
  show_warning?: boolean;
  show_error?: boolean;
  gauge?: any;
  font_size?: string;
  card_width?: string;
  card_height?: string;
  card_top?: string;
  card_left?: string;

  shadow_height?: string;
  shadow_bottom?: string;
  background_color?: string;
}
