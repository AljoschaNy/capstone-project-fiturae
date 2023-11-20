package de.aljoschanyang.capstoneprojectfiturae.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;

public record Workout(
        @Id
        String id,
        @DBRef @Field("user_ref")
        User user,
        @Field("workout_name")
        String workoutName,
        @Field("workout_day")
        WeekDay workoutDay,
        @Field("workout_description")
        String description,
        @Field("workout_plan")
        List<WorkoutExercise> plan
) {
}
