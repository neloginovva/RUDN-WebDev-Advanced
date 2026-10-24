import type { Card } from "../../types/card";
import { BoardCard } from "../BoardCard/BoardCard";
import { deleteCard } from "../../api/cards";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import styles from "./BoardColumn.module.css";

type Props = {
  cards: Card[];
};

export function BoardColumn(props: Props) {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteCard,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cards"] });
    },
    onError: () => {
      alert("Не удалось удалить карточку");
    },
  });

  return (
    <section className={styles.column}>
      <h2 className={styles.title}>К выполнению</h2>
      <div className={styles.cards}>
        {props.cards.map(card => (
          <BoardCard
            key={card.id}
            title={card.title}
            isDone={card.isDone}
            id={card.id}
            onDelete={() => deleteMutation.mutate(card.id)}
          />
        ))}
      </div>
    </section>
  );
}
