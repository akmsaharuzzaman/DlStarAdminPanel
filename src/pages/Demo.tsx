

// =========================
// 1. Type Definitions
// =========================









// =========================
// 2. Reusable Components
// =========================





// =========================
// 3. Dashboard Configs (Role-based)
// =========================


// =========================
// 4. Modal Content Config
// =========================



// =========================
// 5. Dashboard Renderer (Reusable)
// =========================


// =========================
// 6. Main App Component
// =========================

/**
 * App: Main dashboard app. Handles role switching, modal state, and renders dashboard.
 * - Role-based logic is handled by dashboardConfigs and Dashboard component.
 * - Modal content is config-driven for easy extension.
 */




// =========================
// 7. Explanations
// =========================
//
// - All UI is config-driven: stats, actions, and lists for each role are defined in dashboardConfigs.
// - The Dashboard component is fully reusable for any role, just by changing the config.
// - Modal content is also config-driven, so adding new modals is easy and type-safe.
// - All components are typed and reusable, with clear prop interfaces.
// - Role-based logic is handled by switching the config and rendering accordingly.
// - This approach makes the dashboard easy to extend, maintain, and test.
