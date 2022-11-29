const timeFormatter = {
  formatter: new Intl.RelativeTimeFormat('ko', { numeric: 'auto' }),

  relativeTime(dateString: string) {
    const date = new Date(dateString).getTime();
    const now = new Date().getTime();
    const diff = date - now;

    if (Math.abs(diff) < 60 * 1000) {
      return this.formatter.format(Math.floor(diff / 1000), 'seconds');
    }

    if (Math.abs(diff) < 60 * 60 * 1000) {
      return this.formatter.format(Math.floor(diff / (60 * 1000)), 'minutes');
    }

    if (Math.abs(diff) < 24 * 60 * 60 * 1000) {
      return this.formatter.format(
        Math.floor(diff / (60 * 60 * 1000)),
        'hours'
      );
    }

    if (Math.abs(diff) < 7 * 24 * 60 * 60 * 1000) {
      return this.formatter.format(
        Math.floor(diff / (24 * 60 * 60 * 1000)),
        'weeks'
      );
    }

    if (Math.abs(diff) < 12 * 30 * 24 * 60 * 60 * 1000) {
      return this.formatter.format(
        Math.floor(diff / (30 * 24 * 60 * 60 * 1000)),
        'months'
      );
    }

    return this.formatter.format(
      Math.floor(diff / (12 * 30 * 24 * 60 * 60 * 1000)),
      'years'
    );
  }
};

export default timeFormatter;
