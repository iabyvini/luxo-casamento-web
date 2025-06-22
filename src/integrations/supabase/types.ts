export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      gallery_photos: {
        Row: {
          caption: string | null
          category: string | null
          created_at: string
          display_order: number | null
          id: string
          photo_url: string
          site_id: string
        }
        Insert: {
          caption?: string | null
          category?: string | null
          created_at?: string
          display_order?: number | null
          id?: string
          photo_url: string
          site_id: string
        }
        Update: {
          caption?: string | null
          category?: string | null
          created_at?: string
          display_order?: number | null
          id?: string
          photo_url?: string
          site_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "gallery_photos_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "wedding_sites"
            referencedColumns: ["id"]
          },
        ]
      }
      gift_items: {
        Row: {
          category: string | null
          created_at: string
          description: string | null
          id: string
          image_url: string | null
          is_purchased: boolean | null
          name: string
          price: number
          purchased_at: string | null
          purchased_by: string | null
          site_id: string
          updated_at: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          is_purchased?: boolean | null
          name: string
          price: number
          purchased_at?: string | null
          purchased_by?: string | null
          site_id: string
          updated_at?: string
        }
        Update: {
          category?: string | null
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          is_purchased?: boolean | null
          name?: string
          price?: number
          purchased_at?: string | null
          purchased_by?: string | null
          site_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "gift_items_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "wedding_sites"
            referencedColumns: ["id"]
          },
        ]
      }
      gift_lists: {
        Row: {
          commission_rate: number | null
          created_at: string
          current_amount: number | null
          description: string | null
          gift_type: string
          id: string
          is_active: boolean | null
          pix_key: string | null
          site_id: string
          store_name: string | null
          store_url: string | null
          target_amount: number | null
          title: string
        }
        Insert: {
          commission_rate?: number | null
          created_at?: string
          current_amount?: number | null
          description?: string | null
          gift_type: string
          id?: string
          is_active?: boolean | null
          pix_key?: string | null
          site_id: string
          store_name?: string | null
          store_url?: string | null
          target_amount?: number | null
          title: string
        }
        Update: {
          commission_rate?: number | null
          created_at?: string
          current_amount?: number | null
          description?: string | null
          gift_type?: string
          id?: string
          is_active?: boolean | null
          pix_key?: string | null
          site_id?: string
          store_name?: string | null
          store_url?: string | null
          target_amount?: number | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "gift_lists_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "wedding_sites"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          created_at: string
          id: string
          is_approved: boolean | null
          message: string
          sender_email: string | null
          sender_name: string
          site_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_approved?: boolean | null
          message: string
          sender_email?: string | null
          sender_name: string
          site_id: string
        }
        Update: {
          created_at?: string
          id?: string
          is_approved?: boolean | null
          message?: string
          sender_email?: string | null
          sender_name?: string
          site_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "messages_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "wedding_sites"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          email: string
          full_name: string | null
          id: string
          phone: string | null
          subscription_end: string | null
          subscription_status: string | null
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          email: string
          full_name?: string | null
          id: string
          phone?: string | null
          subscription_end?: string | null
          subscription_status?: string | null
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          email?: string
          full_name?: string | null
          id?: string
          phone?: string | null
          subscription_end?: string | null
          subscription_status?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      rsvp_responses: {
        Row: {
          companion_count: number | null
          confirmed_at: string
          dietary_restrictions: string | null
          guest_email: string | null
          guest_name: string
          guest_phone: string | null
          id: string
          message: string | null
          site_id: string
          will_attend: boolean
        }
        Insert: {
          companion_count?: number | null
          confirmed_at?: string
          dietary_restrictions?: string | null
          guest_email?: string | null
          guest_name: string
          guest_phone?: string | null
          id?: string
          message?: string | null
          site_id: string
          will_attend: boolean
        }
        Update: {
          companion_count?: number | null
          confirmed_at?: string
          dietary_restrictions?: string | null
          guest_email?: string | null
          guest_name?: string
          guest_phone?: string | null
          id?: string
          message?: string | null
          site_id?: string
          will_attend?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "rsvp_responses_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "wedding_sites"
            referencedColumns: ["id"]
          },
        ]
      }
      subscriptions: {
        Row: {
          amount: number
          created_at: string
          currency: string | null
          current_period_end: string | null
          current_period_start: string | null
          id: string
          plan_name: string
          plan_type: string
          status: string
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string
          currency?: string | null
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          plan_name: string
          plan_type: string
          status: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string
          currency?: string | null
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          plan_name?: string
          plan_type?: string
          status?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      wedding_sites: {
        Row: {
          ai_welcome_message: string | null
          analytics_data: Json | null
          couple_names: string
          created_at: string
          custom_content: Json | null
          domain_custom: string | null
          id: string
          is_published: boolean | null
          quiz_answers: Json
          slug: string
          template_name: string
          updated_at: string
          user_id: string
          views_count: number | null
          wedding_date: string
        }
        Insert: {
          ai_welcome_message?: string | null
          analytics_data?: Json | null
          couple_names: string
          created_at?: string
          custom_content?: Json | null
          domain_custom?: string | null
          id?: string
          is_published?: boolean | null
          quiz_answers: Json
          slug: string
          template_name: string
          updated_at?: string
          user_id: string
          views_count?: number | null
          wedding_date: string
        }
        Update: {
          ai_welcome_message?: string | null
          analytics_data?: Json | null
          couple_names?: string
          created_at?: string
          custom_content?: Json | null
          domain_custom?: string | null
          id?: string
          is_published?: boolean | null
          quiz_answers?: Json
          slug?: string
          template_name?: string
          updated_at?: string
          user_id?: string
          views_count?: number | null
          wedding_date?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      increment_view_count: {
        Args: { site_slug: string }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
