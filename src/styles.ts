// // style.ts
import { StyleSheet } from "react-native";

export const futureColors = {
  primary: "#1a1b2e", // Deep space blue
  secondary: "#2d2e47", // Lighter space blue
  highlight: "#00f6ff", // Cyan highlight
  shadow: "#131422", // Dark shadow
  text: "#ffffff", // White text
  textSecondary: "#8f9bb3", // Muted text
  accent: "#6b4dff", // Purple accent
  inputBackground: "#2d2e47", // Input background
  success: "#00f7b5", // Neon green for success
  error: "#ff4773", // Neon pink for errors
  surface: "#222339", // Card surface color
  border: "#464973", // Border color
  overlay: "rgba(26, 27, 46, 0.8)", // Modal overlay
};

// Common properties for the futuristic look
const futuristicBase = {
  borderRadius: 8,
  shadowColor: futureColors.highlight,
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.2,
  shadowRadius: 8,
  elevation: 4,
};

const futuristicInput = {
  ...futuristicBase,
  backgroundColor: futureColors.inputBackground,
  borderWidth: 1,
  borderColor: futureColors.border,
  color: futureColors.text,
};

export const textStyles = StyleSheet.create({
  baseText: {
    fontFamily: "sans-serif",
    color: futureColors.text,
  },
  titleText: {
    fontFamily: "sans-serif",
    fontSize: 40,
    fontWeight: "600",
    color: futureColors.text,
    marginTop: 20,
    marginLeft: 10,
    textShadowColor: futureColors.highlight,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  smallTitleText: {
    fontFamily: "sans-serif",
    fontSize: 20,
    fontWeight: "600",
    color: futureColors.text,
    marginTop: 20,
    marginLeft: 10,
    textShadowColor: futureColors.highlight,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
});

export const screenStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: futureColors.primary,
  },
  screenContainer: {
    flex: 1,
    backgroundColor: futureColors.primary,
    padding: 15,
  },
  headerContainer: {
    ...futuristicBase,

    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: `${futureColors.border}30`,
    backgroundColor: futureColors.surface,
  },
  contentContainer: {
    flex: 1,
    padding: 16,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  section: {
    ...futuristicBase,

    marginBottom: 20,
    padding: 16,
    backgroundColor: futureColors.surface,
    borderRadius: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: futureColors.text,
    marginBottom: 12,
    letterSpacing: 0.5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: futureColors.primary,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: futureColors.primary,
  },
  errorText: {
    color: futureColors.error,
    fontSize: 16,
    textAlign: "center",
    marginTop: 8,
  },
  centeredContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: futureColors.primary,
  },
  floatingButton: {
    ...futuristicBase,

    position: "absolute",
    bottom: 20,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: futureColors.accent,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: `${futureColors.primary}80`,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: `${futureColors.border}30`,
    backgroundColor: futureColors.surface,
  },
  horizontalPadding: {
    paddingHorizontal: 16,
  },
  verticalPadding: {
    paddingVertical: 16,
  },
});

export const NavStyles = StyleSheet.create({
  navbar: {
    ...futuristicBase,
    borderRadius: 0,
    backgroundColor: futureColors.primary,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    // borderBottomColor: `${futureColors.border}50`,
    // borderTopColor: `${futureColors.primary}99`,
    height: 60,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  navbarText: {
    color: futureColors.text,
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  navButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: futureColors.surface,
  },
  navButtonText: {
    color: futureColors.text,
    fontSize: 16,
  },
  navTitle: {
    color: futureColors.primary,
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  navHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  headerIcon: {
    color: futureColors.text,
    fontSize: 24,
  },
});
export const buttonStyles = StyleSheet.create({
  saveButton: {
    ...futuristicBase,
    backgroundColor: futureColors.success,
    paddingVertical: 12,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: `${futureColors.highlight}40`, // 40 is opacity
  },
  buttonText: {
    color: futureColors.text,
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 1,
  },
  saveButtonText: {
    color: futureColors.secondary,
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 1,
  },
  deleteButton: {
    ...futuristicBase,
    backgroundColor: futureColors.error,
    paddingVertical: 12,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: `${futureColors.highlight}40`,
  },
  editButton: {
    ...futuristicBase,
    backgroundColor: futureColors.accent,
    paddingVertical: 12,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: `${futureColors.highlight}40`,
  },
});

export const divStyles = StyleSheet.create({
  container: {
    ...futuristicBase,
    backgroundColor: futureColors.primary,
    padding: 20,
  },
});

export const CreateStyles = StyleSheet.create({
  inputField: {
    ...futuristicInput,
    height: 45,
    paddingHorizontal: 16,
    marginVertical: 8,
  },
});
export const listStyles = StyleSheet.create({
  item: {
    ...futuristicBase,

    backgroundColor: futureColors.surface,
    padding: 16,
    marginVertical: 6,
    marginHorizontal: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: `${futureColors.border}30`,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: futureColors.text,
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  itemContent: {
    color: futureColors.textSecondary,
    fontSize: 14,
    marginTop: 4,
  },
  listContainer: {
    flex: 1,
    backgroundColor: futureColors.primary,
    paddingVertical: 8,
  },
  separator: {
    height: 1,
    backgroundColor: `${futureColors.border}30`,
    marginVertical: 4,
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  badge: {
    backgroundColor: futureColors.accent,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    color: futureColors.text,
    fontSize: 12,
    fontWeight: "500",
  },
  touchableItem: {
    transform: [{ scale: 1 }], // For press animation
  },
  touchableItemPressed: {
    transform: [{ scale: 0.98 }],
  },
  emptyList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  emptyListText: {
    color: futureColors.textSecondary,
    fontSize: 16,
    textAlign: "center",
  },
});

export const DetailsStyles = StyleSheet.create({
  detailsContainer: {
    ...futuristicBase,
    backgroundColor: futureColors.surface,
    padding: 20,
    margin: 8,
  },
  houseName: {
    ...textStyles.smallTitleText,
    fontSize: 24,
    fontWeight: "600",
    color: futureColors.text,
    marginBottom: 16,
    marginTop: 0,
    letterSpacing: 1,
  },
  detailRow: {
    flexDirection: "row",
    paddingVertical: 12,
    marginVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: `${futureColors.border}50`,
    alignItems: "center",
  },
  label: {
    flex: 1,
    fontSize: 14,
    fontWeight: "500",
    color: futureColors.textSecondary,
    letterSpacing: 0.5,
    paddingRight: 8,
  },
  value: {
    flex: 2,
    fontSize: 16,
    color: futureColors.text,
    backgroundColor: futureColors.inputBackground,
    padding: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: `${futureColors.border}30`,
  },
  container: {
    flex: 1,
    backgroundColor: futureColors.primary,
    padding: 15,
  },
  sectionHeader: {
    backgroundColor: futureColors.accent,
    padding: 10,
    marginVertical: 5,
    borderRadius: 6,
  },
  sectionHeaderText: {
    color: futureColors.text,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  editButton: {
    ...futuristicBase,

    backgroundColor: futureColors.accent,
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  input: {
    ...futuristicInput,
    flex: 1,
    marginLeft: 8,
  },
  // ... update other detail styles
});

export const tabStyles = StyleSheet.create({
  navigator: {
    backgroundColor: futureColors.primary,
    borderTopWidth: 1,
    borderTopColor: `${futureColors.border}30`,
    height: 60,
  },
  tab: {
    ...futuristicBase,

    backgroundColor: futureColors.surface,
    margin: 8,
    borderRadius: 8,
    paddingVertical: 8,
  },
  activeTab: {
    ...futuristicBase,

    backgroundColor: futureColors.accent,
    margin: 8,
    borderRadius: 8,
    paddingVertical: 8,
  },
  tabLabel: {
    fontFamily: "sans-serif",
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0.5,
    color: futureColors.textSecondary,
  },
  activeTabLabel: {
    color: futureColors.text,
    fontWeight: "700",
  },
  tabIcon: {
    color: futureColors.textSecondary,
  },
  activeTabIcon: {
    color: futureColors.text,
  },
  tabBar: {
    backgroundColor: futureColors.primary,
    borderTopWidth: 1,
    borderTopColor: `${futureColors.border}30`,
    height: 60,
    paddingBottom: 8,
  },
  tabBarIndicator: {
    backgroundColor: futureColors.highlight,
    height: 3,
    borderRadius: 1.5,
  },
  tabBarBadge: {
    backgroundColor: futureColors.error,
    color: futureColors.text,
    borderRadius: 10,
    padding: 4,
    minWidth: 20,
    height: 20,
    textAlign: "center",
    fontSize: 12,
    fontWeight: "600",
    overflow: "hidden",
  },
});

export const dropdownStyles = StyleSheet.create({
  multiSelect: {
    ...futuristicBase,
    backgroundColor: futureColors.surface,
    margin: 8,
  },
  multiSelectHeader: {
    height: 40,
    backgroundColor: futureColors.accent,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
});

// Add animation-related styles
export const animationStyles = StyleSheet.create({
  fadeIn: {
    opacity: 1,
    transform: [{ scale: 1 }],
  },
  fadeOut: {
    opacity: 0,
    transform: [{ scale: 0.95 }],
  },
});

// Add glass-morphism effects where supported
export const glassStyles = StyleSheet.create({
  glass: {
    backgroundColor: `${futureColors.primary}80`,
    borderWidth: 1,
    borderColor: `${futureColors.highlight}30`,
  },
});

// Add new hover effects for web
export const hoverStyles = StyleSheet.create({
  buttonHover: {
    backgroundColor: futureColors.accent + "dd",
    transform: [{ translateY: -2 }],
    shadowOpacity: 0.4,
  },
});

// You might also want to add some layout helpers
export const layoutStyles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  column: {
    flexDirection: "column",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export const SectionedMultiSelectStyle = StyleSheet.create({
  selectToggle: {
    ...futuristicBase,
    backgroundColor: futureColors.surface,
    padding: 12,
    margin: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: futureColors.border,
  },
  selectToggleText: {
    color: futureColors.text,
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 0.5,
    textAlign: "center",
  },
  subItemText: {
    color: futureColors.textSecondary,
    fontSize: 14,
    padding: 8,
    textAlign: "center",
  },
  selectedSubItemText: {
    backgroundColor: futureColors.accent,
    color: futureColors.text,
    borderRadius: 4,
    overflow: "hidden",
  },
  itemText: {
    color: futureColors.secondary,
    fontSize: 16,
    padding: 12,
    textAlign: "center",
  },
  chipContainer: {
    backgroundColor: futureColors.secondary,
    borderRadius: 16,
    padding: 8,
    margin: 4,
    borderWidth: 1,
    borderColor: futureColors.border,
  },
  chipText: {
    color: futureColors.text,
    fontSize: 14,
  },
  searchBar: {
    backgroundColor: futureColors.inputBackground,
    borderRadius: 8,
    padding: 10,
    margin: 8,
    borderWidth: 1,
    borderColor: futureColors.border,
  },
  searchTextInput: {
    color: futureColors.text,
    fontSize: 16,
  },
  confirmText: {
    color: futureColors.success,
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    padding: 12,
  },
  separator: {
    height: 1,
    backgroundColor: futureColors.border,
    marginVertical: 4,
  },
  scrollView: {
    paddingVertical: 8,
  },
  container: {
    ...futuristicBase,

    backgroundColor: futureColors.primary,
    borderRadius: 12,
  },
  modalWrapper: {
    backgroundColor: futureColors.overlay,
  },
  button: {
    ...futuristicBase,

    backgroundColor: futureColors.accent,
    borderRadius: 8,
    padding: 12,
    margin: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: futureColors.text,
    fontSize: 16,
    fontWeight: "600",
  },
  headerText: {
    color: futureColors.text,
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    padding: 16,
  },
});
