import {
  AirportShuttleOutlined,
  BusinessCenterOutlined,
  FoodBankOutlined,
  HealthAndSafetyOutlined,
  HolidayVillageOutlined,
  Interests,
  MusicNote,
  MusicNoteOutlined,
  SportsBarOutlined,
} from "@mui/icons-material";
import { Chip, Typography } from "@mui/material";

const chipContent = [
  { label: "Music", avatar: <MusicNote /> },
  { label: "Performing & Visual Arts", avatar: <AirportShuttleOutlined /> },
  { label: "Holiday", avatar: <HolidayVillageOutlined /> },
  { label: "Health", avatar: <HealthAndSafetyOutlined /> },
  { label: "Hobbies", avatar: <Interests /> },
  { label: "Business", avatar: <BusinessCenterOutlined /> },
  { label: "Food & Drink", avatar: <FoodBankOutlined /> },
  { label: "Sports & Fitness", avatar: <SportsBarOutlined /> },
];

export function TrendingCategories() {
  return (
    <div style={{ margin: "0 0 1rem 10rem" }}>
      <Typography fontSize={"1.3rem"} fontWeight="500" mb={3}>
        Check out trending categories
      </Typography>
      {chipContent.map((chip) => {
        return (
          <span style={{ margin: "0 25px 0 0", cursor: "pointer" }}>
            <Chip
              avatar={chip.avatar}
              style={{ cursor: "pointer" }}
              label={chip.label}
              variant="outlined"
            />
          </span>
        );
      })}
    </div>
  );
}
