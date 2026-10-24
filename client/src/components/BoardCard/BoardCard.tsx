import styles from "./BoardCard.module.css";

type BoardCardProps = {
  title: string;
  isDone: boolean;
  id: string;
  onDelete: (id: string) => void;
};

export function BoardCard({ title, isDone, id, onDelete }: BoardCardProps) {
  const handleDelete = () => {
    if (!window.confirm(`Удалить карточку «${title}»?`)) return;
    onDelete(id);
  };

  return (
    <div className={isDone ? styles.isDone : styles.card}>
      <span className={styles.title}>{title}</span>
      <button
        className={styles.deleteButton}
        type="button"
        onClick={handleDelete}
        aria-label="Удалить карточку"
      >
        ×
      </button>
    </div>
  );
}
